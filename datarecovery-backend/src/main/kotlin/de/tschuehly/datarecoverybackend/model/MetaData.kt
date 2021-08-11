package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonAlias
import com.fasterxml.jackson.annotation.JsonProperty
import javax.persistence.Entity

@Entity(name = "METADATA")
class MetaData(
    @JsonAlias("user_ratings_total")
    var reviewCount: Number?,
    @JsonAlias("rating")
    var reviewAverage: Number?
): BaseEntity()
