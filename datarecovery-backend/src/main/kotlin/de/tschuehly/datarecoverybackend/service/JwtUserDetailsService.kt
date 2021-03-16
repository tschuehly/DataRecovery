package de.tschuehly.datarecoverybackend.service

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.interfaces.DecodedJWT
import de.tschuehly.datarecoverybackend.model.JwtUserDetails
import de.tschuehly.datarecoverybackend.model.User
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

    fun createToken(user: User): String {
        val now = Instant.now()
        val expiry = Instant.now().plus(securityProperties.tokenExpiration)
        return JWT
            .create()
            .withIssuer(securityProperties.tokenIssuer)
            .withIssuedAt(Date.from(now))
            .withExpiresAt(Date.from(expiry))
            .withSubject(user.username)
                .withClaim("id", user.id)
            .sign(algorithm).also { println("gettoken : " + it) }
    }

    private fun getUserDetails(user: User?, token: String): JwtUserDetails {
        user ?: throw Error()
        return JwtUserDetails(
            user.username,
            user.password,
            AuthorityUtils.commaSeparatedStringToAuthorityList(user.role) as List<SimpleGrantedAuthority>,
            token
        )
    }

    fun loadUserByToken(token: String): JwtUserDetails? {
        println("Token in loadUserbyToken: $token")
        return getDecodedToken(token)
                ?.let { it.subject }.also { println("decoded token: $it") }
                ?.let { userRepository.findByUsername(it) }.also { println("user by username: $it") }
                ?.let { getUserDetails(it, token) } ?: throw Error("Error in validating token")

    }

    private fun getDecodedToken(token: String): DecodedJWT? {
        println("beforedecode: $token")
        try {
            return verifier.verify(token)
        } catch (e: Exception) {
            return null
        }
    }
}
