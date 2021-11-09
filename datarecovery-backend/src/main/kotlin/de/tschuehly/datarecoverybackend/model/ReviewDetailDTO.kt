package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonAlias

class ReviewDetailDTO(
    var rating: Number,
    @JsonAlias("user_ratings_total")
    var userRatingsCount: Number
)
