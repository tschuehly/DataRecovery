package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonBackReference
import org.springframework.content.commons.annotations.ContentId
import javax.persistence.*

@Entity
class Picture(
    val name: String?,
    val type: String?,
    @ContentId var imageId: String?
) : BaseEntity() {
}
