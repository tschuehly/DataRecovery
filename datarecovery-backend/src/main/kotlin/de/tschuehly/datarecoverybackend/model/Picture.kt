package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonBackReference
import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.databind.ser.Serializers
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
    @Lob
    val data: ByteArray
    ) :BaseEntity(){


}
