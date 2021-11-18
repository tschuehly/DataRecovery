package de.tschuehly.datarecoverybackend.security

import de.tschuehly.datarecoverybackend.service.JwtUserDetailsService
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import org.springframework.web.util.WebUtils
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class JwtFilter(
    val jwtUserDetailsService: JwtUserDetailsService
) : OncePerRequestFilter() {
    private val COOKIEHEADER = "Cookie"

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
                ?.let { SecurityContextHolder.getContext().authentication = it }
        } catch (e: SecurityException) {
            println(e.localizedMessage)
            response.sendError(401, "Invalid Token")
        }
        filterChain.doFilter(request, response)
    }

    private fun getToken(request: HttpServletRequest): String? {
        val header = request.getHeader(COOKIEHEADER)
        return if (header?.contains("Bearer") == true) {
            header.split("Bearer ")
                .last()
                .split(";")
                .first()
        } else {
            null
        }
    }
}
