package de.tschuehly.datarecoverybackend.model

import java.util.*
import javax.persistence.CascadeType
import javax.persistence.Entity
import javax.persistence.Lob
import javax.persistence.OneToMany
import kotlin.collections.ArrayList

@Entity
class Update(
    var description: String?,
    var date: Date? = Date(),
    @OneToMany(cascade = [CascadeType.ALL])
    var pictures: MutableList<Picture>? = ArrayList()

):BaseEntity() {

}

