package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.databind.ser.Serializers
import javax.persistence.Entity
import javax.persistence.Lob

@Entity
class Picture(
    val name: String?,
    val type: String?,
    @Lob
    val data: ByteArray
    ) :BaseEntity(){


}
