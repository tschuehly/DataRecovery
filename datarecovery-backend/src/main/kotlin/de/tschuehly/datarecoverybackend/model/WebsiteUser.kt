package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonProperty
import java.util.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToOne

@Entity
class WebsiteUser(
    @Id
    @GeneratedValue
    val id: Long,
    val username: String,
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    var password: String,
    val role: String,
    val email: String?,
    val validationID: String = UUID.randomUUID().toString(),
    val emailValidated: Boolean = false,
    @OneToOne
    val customer: Customer?
) {
    override fun toString(): String {
        return "User(id=$id, username='$username', password='$password', role='$role', email=$email)"
    }
}
