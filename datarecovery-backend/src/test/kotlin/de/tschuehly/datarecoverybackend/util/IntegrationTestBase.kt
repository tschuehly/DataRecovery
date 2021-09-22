package de.tschuehly.datarecoverybackend.util

import org.springframework.test.context.DynamicPropertyRegistry
import org.springframework.test.context.DynamicPropertySource
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
        @JvmStatic
        @DynamicPropertySource
        fun properties(registry: DynamicPropertyRegistry) {
            registry.add("spring.datasource.url", postgresContainer::getJdbcUrl)
            registry.add("spring.datasource.password", postgresContainer::getPassword)
            registry.add("spring.datasource.username", postgresContainer::getUsername)
        }
    }
}
