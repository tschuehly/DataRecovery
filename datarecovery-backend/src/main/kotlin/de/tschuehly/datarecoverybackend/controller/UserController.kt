package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.service.UserService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.*
import de.tschuehly.datarecoverybackend.model.WebsiteUser
import de.tschuehly.datarecoverybackend.service.JwtUserDetailsService
import org.slf4j.Logger
import org.springframework.http.HttpStatus
import org.springframework.web.server.ResponseStatusException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("api/user")
class UserController(
    val userService: UserService,
    val authenticationProvider: AuthenticationProvider,
    val jwtUserDetailsService: JwtUserDetailsService,
    val logger: Logger
) {

    @GetMapping("/authorities")
    fun getAuthorities(): String? {
        try {
            val roles =  SecurityContextHolder.getContext().authentication.authorities.joinToString { it -> it.authority }
            return "{ \"roles\": \"$roles\" }"
        } catch (e: Error) {
            logger.error(e.toString())
            throw ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                e.localizedMessage
            )
        }

    }

    @PostMapping("/login")
    fun login(@RequestBody credentials: Map<String, String>, response: HttpServletResponse): WebsiteUser {
        val authenticationToken = UsernamePasswordAuthenticationToken(credentials["username"], credentials["password"])
        SecurityContextHolder.getContext().authentication = authenticationProvider.authenticate(authenticationToken)
        val user = userService.getCurrentUser()
        response.setHeader("Set-Cookie","JWT=Bearer ${jwtUserDetailsService.createToken(user)}; Secure; HttpOnly; SameSite=Strict;Max-Age=6000;Path=/ ")
        return user


    }

    @GetMapping("/logout")
    fun logout(response: HttpServletResponse, request: HttpServletRequest): String {
        val jwtToken = request.getHeader("Cookie").substringAfter("Bearer ")
        response.setHeader("Set-Cookie","JWT=Bearer ${jwtToken}; Secure; HttpOnly; SameSite=Strict;Max-Age=-1;Path=/")
        return "{\"logout\": \"true\"}"

    }

}
