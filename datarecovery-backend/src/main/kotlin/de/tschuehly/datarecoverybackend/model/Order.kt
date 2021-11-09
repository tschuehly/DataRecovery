package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.*
import org.hibernate.annotations.Type
import java.util.*
import javax.persistence.*
import kotlin.collections.ArrayList

@Entity
@Table(name = "ORDER_TABLE")
@JsonIgnoreProperties(ignoreUnknown = true)
class Order(
    var trackingId: String? = UUID.randomUUID().toString(),
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var orderDate: Date?,
    var trackingState: String?,
    var monthlyPayment: Int = 1,
    @OneToOne
    var orderProduct: OrderProduct,
    @OneToOne(cascade = [CascadeType.ALL])
    var customer: Customer?,
    var replacement: String,
    @OneToMany(cascade = [CascadeType.ALL], mappedBy = "order")
    @JsonManagedReference
    var updates: MutableList<Update> = ArrayList(),
    @Lob
    @Type(type="org.hibernate.type.StringType")
    var note: String?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var deadline: Date?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var completionDate: Date?
) : BaseEntity() {
    override fun toString(): String {
        return "Order(trackingId=$trackingId, orderDate=$orderDate, trackingState=$trackingState, product=$orderProduct, customer=$customer, replacement='$replacement')"
    }

    fun addUpdateToOrder(update: Update) = updates.add(update)
}
