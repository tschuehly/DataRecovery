package de.tschuehly.datarecoverybackend.model

import javax.persistence.Entity
import javax.persistence.OneToOne

@Entity
class Customer(
    var firstName: String?,
    var lastName: String?,
    var tel: String?,
    var email: String?,
    var postalCode: String?,
    var city : String?,
    var street: String?,
) : BaseEntity() {
    override fun toString(): String {
        return "Customer(firstName=$firstName, lastName=$lastName, tel=$tel, email=$email, postalCode=$postalCode, city=$city, street=$street)"
    }
}
