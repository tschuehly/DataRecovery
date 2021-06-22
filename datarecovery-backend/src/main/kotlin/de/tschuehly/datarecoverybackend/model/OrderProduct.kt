package de.tschuehly.datarecoverybackend.model

import javax.persistence.Entity
import javax.persistence.OneToOne

@Entity(name = "ORDERPRODUCT")
class OrderProduct(
    @OneToOne
    var category: Category?,
    var name: String?,
    var price: Double?
) : BaseEntity() {
    override fun toString(): String {
        return "Product(category='$category', name=$name, price=$price)"
    }
}
