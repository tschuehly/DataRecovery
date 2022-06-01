package de.tschuehly.datarecoverybackend.model

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

data class JwtUserDetails(
    private val username: String,
    private val password: String,
    val authorities: List<GrantedAuthority>,
    val token: String
) : UserDetails {

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return authorities.toList()
    }

    override fun getPassword(): String {
        return password
    }

    override fun getUsername(): String {
        return username
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }
}
