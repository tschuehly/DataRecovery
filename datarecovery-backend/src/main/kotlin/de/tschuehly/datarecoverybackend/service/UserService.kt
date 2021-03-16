package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.model.User
import de.tschuehly.datarecoverybackend.repository.UserRepository
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import java.lang.Exception
import kotlin.NoSuchElementException

@Service
class UserService(
    val userRepository: UserRepository,
    val passwordEncoder: PasswordEncoder
) {
    fun getCurrentUser(): User {
        SecurityContextHolder.getContext().authentication
            .let { it.name }
            .let { userRepository.findByUsername(it) }
            ?.let { return it } ?: throw Exception("User with matching username and password not found")
    }

}
