package de.tschuehly.datarecoverybackend.model

import org.hibernate.annotations.NaturalId
import org.hibernate.annotations.Type
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Lob

@Entity
class Review(
    var author_name: String,
    @Id
    @NaturalId
    var author_url: String,
    var profile_photo_url: String,
    var rating: Int,
    var relative_time_description: String,
    @Lob
    @Type(type = "org.hibernate.type.StringType")
    var text: String,
    var time: Int
)
