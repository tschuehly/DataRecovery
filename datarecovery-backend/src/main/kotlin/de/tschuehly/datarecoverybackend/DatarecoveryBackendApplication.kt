package de.tschuehly.datarecoverybackend

import de.tschuehly.datarecoverybackend.model.*
import de.tschuehly.datarecoverybackend.repository.*
import de.tschuehly.datarecoverybackend.security.JwtFilter
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.transaction.annotation.Transactional
import java.util.*


@SpringBootApplication
class DatarecoveryBackendApplication(
	val jwtFilter: JwtFilter
) : CommandLineRunner {
	@Transactional
	override fun run(vararg args: String?) {
	}
}

fun main(args: Array<String>) {
	runApplication<DatarecoveryBackendApplication>(*args)
}
