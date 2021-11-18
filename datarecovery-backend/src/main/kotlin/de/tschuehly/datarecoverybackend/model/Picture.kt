package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonBackReference
import org.springframework.content.commons.annotations.ContentId
import javax.persistence.*

@Entity
class Picture(
    val name: String?,
    val type: String?,
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "update_id")
    @JsonBackReference
    val update: Update?,
    @ContentId var imageId: String
) : BaseEntity() {
    constructor(name: String?, type: String?, update: Update) : this(name, type, update, "")
}
