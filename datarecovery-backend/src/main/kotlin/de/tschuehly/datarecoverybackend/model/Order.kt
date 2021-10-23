package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.hibernate.annotations.Type
import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

@Entity
@Table(name="ORDER_TABLE")
@JsonIgnoreProperties(ignoreUnknown = true)
class Order(
    var trackingId: String? = UUID.randomUUID().toString(),
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var orderDate: Date?,
    var trackingState: String?,
    @OneToOne
    var product: Product,
    @OneToOne(cascade = [CascadeType.ALL])
    var customer: Customer?,
    var replacement: String,
    @OneToMany(cascade = [CascadeType.ALL])
    var updates: MutableList<Update> = ArrayList(),
    @Lob
    @Type(type="org.hibernate.type.StringClobType")
    var note: String?
) : BaseEntity() {
    override fun toString(): String {
        return "Order(trackingId=$trackingId, orderDate=$orderDate, trackingState=$trackingState, product=$product, customer=$customer, replacement='$replacement')"
    }

    fun addUpdateToOrder(update: Update) = updates.add(update)

}
