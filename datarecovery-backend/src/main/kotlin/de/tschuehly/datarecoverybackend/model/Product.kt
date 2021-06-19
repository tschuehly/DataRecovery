package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonFormat
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.envers.Audited
import org.hibernate.envers.NotAudited
import java.util.*
import javax.persistence.*

@Entity
@Audited
class Product(
    @NotAudited
    @OneToOne
    var category: Category?,
    var name: String?,
    var price: Double?,
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @CreationTimestamp
    var createDate: Date?,
) : BaseEntity() {
    override fun toString(): String {
        return "Product(category='$category', name=$name, price=$price)"
    }
}
