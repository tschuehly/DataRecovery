package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonFormat
import java.util.*
import javax.persistence.Entity
import javax.persistence.OneToOne
import javax.persistence.Version

@Entity
class Product(
    @OneToOne
    var category: Category?,
    var name: String?,
    var price: Double?,
    @org.springframework.data.annotation.Version
    var versionNumber: Number?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    var createDate: Date?,
) : BaseEntity() {
    override fun toString(): String {
        return "Product(category='$category', name=$name, price=$price)"
    }
}
