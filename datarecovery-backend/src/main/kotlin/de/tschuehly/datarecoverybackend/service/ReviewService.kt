package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.MetaData
import de.tschuehly.datarecoverybackend.model.Product
import de.tschuehly.datarecoverybackend.model.Review
import de.tschuehly.datarecoverybackend.repository.MetaDataRepository
import de.tschuehly.datarecoverybackend.repository.ProductRepository
import de.tschuehly.datarecoverybackend.repository.ReviewRepository
import org.slf4j.Logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.lang.NullPointerException
import javax.annotation.PostConstruct
import kotlin.math.log

@Service
class ReviewService(val logger:Logger,
                    val reviewRepository: ReviewRepository,
                    val metaDataRepository: MetaDataRepository){
    @Value("\${GOOGLEMAPS_PLACEID}")
    lateinit var placeId: String
    @Value("\${GOOGLEMAPS_APIKEY}")
    lateinit var apiKey: String


    @Scheduled(cron = "@daily", zone = "Europe/Paris")
    @PostConstruct
    fun refreshReviews(): List<Review> {
        try{
            val restTemplate = RestTemplate()
            val response = restTemplate.getForEntity("https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,user_ratings_total,rating&key=${apiKey}&language=de_DE", String::class.java)
            val mapper = jacksonObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false)
            val result = mapper.readTree(response.body).get("result")
            val reviews: List<Review> = mapper.readValue(result.get("reviews").toString())
            val metaData : MetaData = mapper.readValue(result.toString())
            metaDataRepository.save(metaData)
            reviewRepository.saveAll(reviews)
            logger.info("Refreshed all Reviews")
            return reviewRepository.findAll()
        }catch (e: NullPointerException){
            logger.error(e.toString())
            logger.error("Could not refresh reviews")
            return emptyList()
        }
    }

    fun getAllReviews(): List<Review> {
        return reviewRepository.findAll()
    }

}
