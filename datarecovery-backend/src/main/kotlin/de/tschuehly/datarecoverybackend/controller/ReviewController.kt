package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Review
import de.tschuehly.datarecoverybackend.repository.ReviewRepository
import de.tschuehly.datarecoverybackend.service.ReviewService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/review")
class ReviewController(val reviewService: ReviewService){
        @GetMapping()
        fun getAllReviews() = reviewService.getAllReviews()
        @GetMapping("refresh")
        fun refreshReviews() = reviewService.refreshReviews()
    }
