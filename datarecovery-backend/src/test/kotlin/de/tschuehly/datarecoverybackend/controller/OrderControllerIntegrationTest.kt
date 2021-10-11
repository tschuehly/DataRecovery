package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.util.IntegrationTestBase
import org.hamcrest.Matchers.hasSize
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestPropertySource
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.testcontainers.junit.jupiter.Testcontainers

@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(
    locations = ["classpath:testEnvironment.env"]
)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles(profiles = ["integrationTest"])
internal class OrderControllerIntegrationTest @Autowired constructor(val mockMvc: MockMvc) : IntegrationTestBase() {

    @Test
    fun getArchived() {
        mockMvc.get("/api/order/archive").andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.*", hasSize<Any>(2))
        }
    }

    @Test
    fun shouldReturnAllActiveOrders() {
        mockMvc.get("/api/order/active").andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.*", hasSize<Any>(2))
        }
    }

    @Test
    fun getAwaited() {
        mockMvc.get("/api/order/awaited").andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.*", hasSize<Any>(4))
        }
    }
}
