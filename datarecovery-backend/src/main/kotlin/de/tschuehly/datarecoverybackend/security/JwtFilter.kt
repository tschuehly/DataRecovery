package de.tschuehly.datarecoverybackend.security

import de.tschuehly.datarecoverybackend.service.JwtUserDetailsService
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import java.lang.Error
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class JwtFilter(
    val jwtUserDetailsService: JwtUserDetailsService
) : OncePerRequestFilter() {
    private val AUTHORIZATION_HEADER = "Authorization"
    private val COOKIE_HEADER = "cookie"

    @Throws
    override fun doFilterInternal(request: HttpServletRequest, response: HttpServletResponse, filterChain: FilterChain) {
        try {
            getToken(request)
                ?.let { jwtUserDetailsService.loadUserByToken(it) }

                ?.let { jwtUserDetails ->
                    JWTPreAuthenticationToken(
                        jwtUserDetails, WebAuthenticationDetailsSource().buildDetails(request)
                    )
                }
                ?.also { println("context: " + SecurityContextHolder.getContext().authentication) }
                ?.let { SecurityContextHolder.getContext().authentication = it }
                ?.also { println("context: " + SecurityContextHolder.getContext().authentication) }
        } catch (e: Error) {
            println(e.localizedMessage)
        }

        filterChain.doFilter(request, response)
    }

    private fun getToken(request: HttpServletRequest): String? {
        return request.getHeader(AUTHORIZATION_HEADER)
            ?: request.getHeader(COOKIE_HEADER)
                ?.split("Bearer ")
                ?.last()
    }
}
