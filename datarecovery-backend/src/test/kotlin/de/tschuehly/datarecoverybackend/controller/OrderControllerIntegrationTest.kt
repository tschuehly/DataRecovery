package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.util.IntegrationTestBase
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestPropertySource
import org.springframework.test.context.jdbc.Sql
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.testcontainers.junit.jupiter.Testcontainers

@Testcontainers
@Sql("classpath:database/init.sql")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(
    locations = ["classpath:testEnvironment.env"]
)
@AutoConfigureMockMvc
@ActiveProfiles(profiles = ["integrationTest"])
internal class OrderControllerIntegrationTest() : IntegrationTestBase() {

    @Autowired
    lateinit var mockMvc: MockMvc
    @Test
    fun getArchived() {
    }

    @Test
    fun shouldReturnAllActiveOrders() {
        mockMvc.get("/api/order").andExpect { status { 200 } }
    }

    @Test
    fun getAwaited() {
    }
}
