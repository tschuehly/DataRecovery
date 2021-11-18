package de.tschuehly.datarecoverybackend.util

import java.util.function.Supplier
import org.springframework.test.context.DynamicPropertyRegistry
import org.springframework.test.context.DynamicPropertySource
import org.testcontainers.containers.GenericContainer
import org.testcontainers.containers.PostgreSQLContainer
import org.testcontainers.junit.jupiter.Container

open class IntegrationTestBase() {

    companion object {
        @Container
        val postgresContainer = PostgreSQLContainer<Nothing>("postgres:13.4")
            .apply {
                withDatabaseName("testdb")
                withUsername("duke")
                withPassword("s3crEt")
            }

        @Container
        var greenMailContainer = GenericContainer<Nothing>("greenmail/standalone:1.6.1")
            .apply {
                withEnv(
                    "GREENMAIL_OPTS",
                    "-Dgreenmail.setup.test.all -Dgreenmail.hostname=0.0.0.0 -Dgreenmail.users=test:test"
                )
                withExposedPorts(3025)
            }
        @JvmStatic
        @DynamicPropertySource
        fun properties(registry: DynamicPropertyRegistry) {
            registry.add("spring.datasource.url", postgresContainer::getJdbcUrl)
            registry.add("spring.datasource.password", postgresContainer::getPassword)
            registry.add("spring.datasource.username", postgresContainer::getUsername)
            registry.add("spring.mail.host", greenMailContainer::getHost)
            registry.add("spring.mail.username", Supplier { -> "test" })
            registry.add("spring.mail.password",  Supplier { -> "test" })
            registry.add("spring.mail.port", greenMailContainer::getFirstMappedPort)
        }
    }
}
