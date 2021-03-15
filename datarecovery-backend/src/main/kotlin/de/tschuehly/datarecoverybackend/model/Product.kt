package de.tschuehly.datarecoverybackend.model

import javax.persistence.Entity

@Entity
class Product(
    var category: String,
    var name: String?,
    var price: Double?
) : BaseEntity() {
    override fun toString(): String {
        return "Product(category='$category', name=$name, price=$price)"
    }
}
