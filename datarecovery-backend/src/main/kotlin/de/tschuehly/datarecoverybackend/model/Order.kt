package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.hibernate.annotations.GenericGenerator
import org.hibernate.id.UUIDGenerator
import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

@Entity
@Table(name="ORDER_TABLE")
@JsonIgnoreProperties(ignoreUnknown = true)
class Order(
    var trackingId: String? = UUID.randomUUID().toString(),
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
