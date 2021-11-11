package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.util.IntegrationTestBase
import org.hamcrest.CoreMatchers.*
import org.hamcrest.Matchers.allOf
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
import org.springframework.test.web.servlet.post
import org.testcontainers.junit.jupiter.Testcontainers
import java.io.File
import java.util.*

@Testcontainers
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(
    locations = ["classpath:testEnvironment.env"]
)
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles(profiles = ["integrationTest"])
internal class OrderControllerIntegrationTest @Autowired constructor(val mockMvc: MockMvc) : IntegrationTestBase() {
    @Test
    fun createOrder() {
        mockMvc.post("/api/order/create") {
            contentType = MediaType.APPLICATION_JSON
            content = File("src/test/resources/data/createOrder.json").readText()
                }.andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.id", allOf(notNullValue(), instanceOf(Number::class.java)))
            jsonPath("$.trackingId",allOf(notNullValue(), instanceOf(String::class.java)) )
            jsonPath("$.customer.firstName", `is`("Max"))
        }
    }

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
            jsonPath("$.*", hasSize<Any>(4))
        }
    }

    @Test
    fun getAwaited() {
        mockMvc.get("/api/order/awaited").andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.*", hasSize<Any>(3))
        }
    }
}
