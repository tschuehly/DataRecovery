package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonBackReference
import org.hibernate.annotations.Type
import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

@Entity
class Update(
    @Column(length = 1000)
    var title: String?,
    @Lob
    @Type(type = "org.hibernate.type.StringType")
    var description: String? = null,
    var date: Date? = Date(),
    @OneToMany(cascade = [CascadeType.ALL])
    var pictures: MutableList<Picture>? = ArrayList(),
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", updatable = false)
    @JsonBackReference
    var order: Order?

) : BaseEntity()
