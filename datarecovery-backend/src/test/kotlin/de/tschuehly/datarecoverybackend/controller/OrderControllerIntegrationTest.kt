package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.util.IntegrationTestBase
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.jdbc.Sql
import org.testcontainers.junit.jupiter.Testcontainers

@Testcontainers
@Sql("INIT.sql")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
internal class OrderControllerIntegrationTest() : IntegrationTestBase() {

    @Test
    fun getArchived() {
    }

    @Test
    fun shouldReturnAllActiveOrders() {

    }

    @Test
    fun getAwaited() {
    }
}
