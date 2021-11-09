package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import de.tschuehly.datarecoverybackend.model.Review
import de.tschuehly.datarecoverybackend.model.ReviewDetailDTO
import de.tschuehly.datarecoverybackend.repository.ReviewRepository
import org.slf4j.Logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.io.IOException
import javax.annotation.PostConstruct

@Service
class ReviewService(val logger: Logger, val reviewRepository: ReviewRepository) {
    @Value("\${GOOGLEMAPS_PLACEID}")
    lateinit var placeId: String
    @Value("\${GOOGLEMAPS_APIKEY}")
    lateinit var apiKey: String

    @Scheduled(cron = "@daily", zone = "Europe/Paris")
    @PostConstruct
    fun refreshReviews(): List<Review> {
        getReviewData()?.let { reviewData ->
            val mapper = jacksonObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
            val reviews: List<Review> = mapper.readValue(mapper.readTree(reviewData).get("result").get("reviews").toString())
            reviewRepository.saveAll(reviews)
            logger.info("Refreshed all Reviews")
            return reviewRepository.findAll()
        } ?: throw NoSuchElementException("No Reviews from Google returned")
    }

    fun getAllReviews(): List<Review> {
        return reviewRepository.findAll()
    }

    fun getReviewDetail(): ReviewDetailDTO? {
        getReviewData()?.let { reviewData ->
            val mapper = jacksonObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
            return mapper.readValue(mapper.readTree(reviewData).get("result").toString())
        } ?: throw NoSuchElementException("No ReviewData from Google returned")
    }

    private fun getReviewData(): String? {
        return try {
            val restTemplate = RestTemplate()
            val response = restTemplate.getForEntity("https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=reviews,user_ratings_total,rating&key=$apiKey&language=de_DE", String::class.java)
            response.body
        } catch (e: IOException) {
            logger.error(e.localizedMessage)
            null
        }

    }
}
