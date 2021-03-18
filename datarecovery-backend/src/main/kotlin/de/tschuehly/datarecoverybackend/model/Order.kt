package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.util.*
import javax.persistence.*

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
    var replacement: String
) : BaseEntity() {
    override fun toString(): String {
        return "Order(trackingId=$trackingId, orderDate=$orderDate, trackingState=$trackingState, product=$product, customer=$customer, replacement='$replacement')"
    }
}
