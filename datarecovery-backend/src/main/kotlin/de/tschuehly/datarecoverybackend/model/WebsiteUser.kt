package de.tschuehly.datarecoverybackend.model

import com.fasterxml.jackson.annotation.JsonProperty
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
class WebsiteUser(
    @Id
    @GeneratedValue
    val id: Long,
    val username: String,
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    var password: String,
    val role: String,
    val email: String?
) {
    override fun toString(): String {
        return "User(id=$id, username='$username', password='$password', role='$role', email=$email)"
    }
}
