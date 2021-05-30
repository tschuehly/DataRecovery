package de.tschuehly.datarecoverybackend.service

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.interfaces.DecodedJWT
import de.tschuehly.datarecoverybackend.model.JwtUserDetails
import de.tschuehly.datarecoverybackend.model.WebsiteUser
import de.tschuehly.datarecoverybackend.repository.UserRepository
import de.tschuehly.datarecoverybackend.security.SecurityProperties
import org.springframework.security.core.authority.AuthorityUtils
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.stereotype.Service
import java.time.Instant
import java.util.*

@Service
class JwtUserDetailsService(
    val verifier: JWTVerifier,
    val algorithm: Algorithm,
    val userRepository: UserRepository,
    val securityProperties: SecurityProperties
) : UserDetailsService {

    override fun loadUserByUsername(username: String): JwtUserDetails {
        return userRepository
            .findByUsername(username)
            ?.let { getUserDetails(it, createToken(it)) }
            ?: throw Exception("Username or password didn't match")
    }

    fun createToken(websiteUser: WebsiteUser): String {
        val now = Instant.now()
        val expiry = Instant.now().plus(securityProperties.tokenExpiration)
        return JWT
            .create()
            .withIssuer(securityProperties.tokenIssuer)
            .withIssuedAt(Date.from(now))
            .withExpiresAt(Date.from(expiry))
            .withSubject(websiteUser.username)
                .withClaim("id", websiteUser.id)
            .sign(algorithm)
    }

    private fun getUserDetails(websiteUser: WebsiteUser?, token: String): JwtUserDetails {
        websiteUser ?: throw Error()
        return JwtUserDetails(
            websiteUser.username,
            websiteUser.password,
            AuthorityUtils.commaSeparatedStringToAuthorityList(websiteUser.role) as List<SimpleGrantedAuthority>,
            token
        )
    }

    fun loadUserByToken(token: String): JwtUserDetails? {
        return getDecodedToken(token)?.subject
                ?.let { userRepository.findByUsername(it) }
                ?.let { getUserDetails(it, token) } ?: throw SecurityException("Error in validating token")

    }

    private fun getDecodedToken(token: String): DecodedJWT? {
        try {
            return verifier.verify(token)
        } catch (e: Exception) {
            return null
        }
    }
}
