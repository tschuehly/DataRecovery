package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.annotations.Type
import javax.persistence.*

@Entity
class Picture(

    val name: String?,
    val type: String?,
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "update_id")
    @JsonBackReference
    val update: Update?,
    @JsonIgnore
    @Type(type = "org.hibernate.type.MaterializedBlobType")
    val data: ByteArray
) : BaseEntity()
