package de.tschuehly.datarecoverybackend.security

import de.tschuehly.datarecoverybackend.model.JwtUserDetails
import org.springframework.security.web.authentication.WebAuthenticationDetails
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken

class JWTPreAuthenticationToken(principal: JwtUserDetails, details: WebAuthenticationDetails) :
    PreAuthenticatedAuthenticationToken(principal, details, principal.getAuthorities()) {

    override fun getCredentials(): Any? {
        return null
    }
}
