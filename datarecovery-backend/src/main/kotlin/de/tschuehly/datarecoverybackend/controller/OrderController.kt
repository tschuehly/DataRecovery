package de.tschuehly.datarecoverybackend.controller

import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonNumberFormatVisitor
import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Picture
import de.tschuehly.datarecoverybackend.model.Update
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import de.tschuehly.datarecoverybackend.service.OrderService
import org.slf4j.Logger
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import org.springframework.web.server.ResponseStatusException

@RestController
@RequestMapping("api/order")
class OrderController(
    val orderService: OrderService,
    private val logger: Logger) :
    CrudController<Order, OrderRepository,OrderService>(orderService, logger) {
    @PostMapping("/create")
    fun createOrder(@RequestBody order: Order): Boolean{
        return try {
            orderService.createOrder(order)
            true
        } catch (e: Error) {
            logger.error(e.toString())
            false
        }
    }
    @PostMapping("/updateStatus")
    fun updateStatus(@RequestBody order: Order): Boolean{
        return try {
            orderService.updateState(order)
            true
        } catch (e: Error) {
            logger.error(e.toString())
            false
        }
    }

    @GetMapping("/tracking")
    fun getByTrackingId(
        @RequestParam trackingId: String,
        @RequestParam postalCode: String
    ): Order {
        return try {
            orderService.getByTrackingIdAndPostalCode(trackingId, postalCode)
        } catch (e: NoSuchElementException) {
            throw ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                e.localizedMessage
            )
        }
    }

    @PostMapping("/addUpdate/{id}", consumes = ["multipart/form-data"])
    fun addUpdateToOrder(
        @PathVariable id: Long,
        @RequestParam("imageFile") multiPartFile : Array<MultipartFile>
    ): Order{
        return try{
            orderService.addUpdateToOrder(id,multiPartFile)
        }catch (e: NoSuchElementException){
            throw ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                e.localizedMessage
            )
        }
    }

}
