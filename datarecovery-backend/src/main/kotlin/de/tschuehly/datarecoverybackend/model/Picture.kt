package de.tschuehly.datarecoverybackend.model

import org.springframework.content.commons.annotations.ContentId
import javax.persistence.Entity

@Entity
class Picture(
    val name: String?,
    val type: String?,
    @ContentId var imageId: String?
) : BaseEntity() {
}
