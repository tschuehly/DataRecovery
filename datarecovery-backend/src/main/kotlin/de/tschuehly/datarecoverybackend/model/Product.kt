package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*
import javax.persistence.Entity

@Entity
class Product(
    var category: String,
    var name: String?,
    var price: Double?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var createDate: Date?,
) : BaseEntity() {
    override fun toString(): String {
        return "Product(category='$category', name=$name, price=$price)"
    }
}
