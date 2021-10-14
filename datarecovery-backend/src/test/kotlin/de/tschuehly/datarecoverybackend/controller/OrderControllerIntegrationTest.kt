package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.util.IntegrationTestBase
import org.hamcrest.CoreMatchers.instanceOf
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.CoreMatchers.notNullValue
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
            // / language=JSON
            content = """{"customer":{"firstName":"Thomas","lastName":"Muster","tel":"015712219","email":"tschuehly@example.com","postalCode":"88420","city":"Stuttgart","street":"Heart Road"},"product":"5","note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","replacement":"Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei","monthlyPayment":"2","orderProduct":{"category":{"name":"HDD","title":"Datenrettung bei defekter HDD\n(z.B. klackert, wird nicht erkannt, möchte formatiert werden):","description":null,"replacement":false,"questions":[],"sequenceId":null,"id":2},"name":"mit bis zu 500GB Festplattenkapazität:","price":300,"createDate":null,"sequenceId":1,"id":5}}"""
        }.andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.id", allOf(notNullValue(), instanceOf(Number::class.java)))
            jsonPath("$.customer.firstName", `is`("Thomas"))
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
