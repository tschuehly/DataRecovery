package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import de.tschuehly.datarecoverybackend.model.Review
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
        try {
            val restTemplate = RestTemplate()
            val response = restTemplate.getForEntity("https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=reviews&key=$apiKey&language=de_DE", String::class.java)
            val mapper = jacksonObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
            val reviews: List<Review> = mapper.readValue(mapper.readTree(response.body).get("result").get("reviews").toString())
            reviewRepository.saveAll(reviews)
            logger.info("Refreshed all Reviews")
        } catch (e: IOException) {
            logger.error(e.localizedMessage)
        }
        return reviewRepository.findAll()
    }

    fun getAllReviews(): List<Review> {
        return reviewRepository.findAll()
    }
}
