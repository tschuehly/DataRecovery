package de.tschuehly.datarecoverybackend.model

import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

@Entity
class Update(
    var description: String?,
    var date: Date? = Date(),
    @OneToMany(cascade = [CascadeType.ALL])
    var pictures: MutableList<Picture>? = ArrayList(),
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    var order: Order?


):BaseEntity() {

}

