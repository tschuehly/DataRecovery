package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.util.IntegrationTestBase
import org.hamcrest.CoreMatchers.*
import org.hamcrest.Matchers.allOf
import org.hamcrest.Matchers.hasSize
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.PropertySource
import org.springframework.data.web.JsonPath
import org.springframework.http.MediaType
import org.springframework.mock.web.MockMultipartFile
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.TestPropertySource
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.multipart
import org.springframework.test.web.servlet.post
import org.testcontainers.junit.jupiter.Testcontainers
import java.io.File
import java.util.*

internal class OrderControllerIntegrationTest @Autowired constructor(val mockMvc: MockMvc) : IntegrationTestBase() {
    @Test
    @WithMockUser(username = "anonymous")
    fun createOrder() {
        mockMvc.post("/api/order/create") {
            contentType = MediaType.APPLICATION_JSON
            content = File("src/test/resources/data/createOrder.json").readText()
        }.andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.id", allOf(notNullValue(), instanceOf(Number::class.java)))
            jsonPath("$.trackingId", allOf(notNullValue(), instanceOf(String::class.java)))
            jsonPath("$.customer.firstName", `is`("Max"))
        }
    }

    @Test
    @WithMockUser(username = "admin", roles = ["ADMIN"])
    fun getArchived() {
        mockMvc.get("/api/order/state?state=Auftrag eingegangen").andExpect {
            status { isOk() }
            content { contentType(MediaType.APPLICATION_JSON) }
            jsonPath("$.*", hasSize<Any>(3))
        }
    }

    @Test
    @WithMockUser(username = "user")
    fun getArchivedShouldFail() {
        mockMvc.get("/api/order/state?state=Auftrag eingegangen").andExpect {
            status { isForbidden() }
        }
    }


    @Test
    @WithMockUser(username = "admin", roles = ["ADMIN"])
    fun addUpdateWithPictureToOrder() {
        val addUpdateResult = mockMvc.multipart("/api/order/addUpdate/56") {
            file(
                MockMultipartFile(
                    "pictures",
                    "testpicture_1.png",
                    "image/png",
                    File("src/test/resources/data/testpicture_1.png").readBytes()
                )
            )
            param("""update""", """{"description":"test"}""")

        }.andExpect {
            status { isOk() }
            jsonPath("$.updates[0].pictures[0].imageId", allOf(notNullValue(), instanceOf(String::class.java)))
        }.andReturn()
        val imageId: Number =
            com.jayway.jsonpath.JsonPath.read(addUpdateResult.response.contentAsString, "$.updates[0].pictures[0].id")

        mockMvc.get("/api/picture/$imageId").andExpect {
            status { isOk() }
        }

    }

    @Test
    @WithMockUser(username = "admin", roles = ["ADMIN"])
    fun addProduct() {
        mockMvc.post("/api/product") {
            contentType = MediaType.APPLICATION_JSON
            content = """{"id":null,"category":{"id":"2"},"name":"test","price":"987","sequenceId":123}"""
        }.andExpect {
            status { isOk() }
            jsonPath("$.id", allOf(notNullValue(), instanceOf(Number::class.java)))
            jsonPath("$.name", `is`("test"))
        }
    }

}
