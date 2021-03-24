package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Order
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
    CrudController<Order, OrderRepository,OrderService>(orderService) {
    @PostMapping("/create")
    fun createOrder(@RequestBody order: Order) = orderService.createOrder(order)

    @PostMapping("/updateStatus")
    fun updateStatus(@RequestBody order: Order) = orderService.updateState(order)

    @GetMapping("/tracking")
    fun getByTrackingId(
        @RequestParam trackingId: String,
        @RequestParam postalCode: String
    ): Order = orderService.getByTrackingIdAndPostalCode(trackingId, postalCode)

    @PostMapping("/addUpdate/{id}", consumes = ["multipart/form-data"])
    fun addUpdateToOrder(
        @PathVariable id: Long,
        @RequestParam("pictures") pictures : Array<MultipartFile>,
        @RequestParam("update") update: String
    ): Order = orderService.addUpdateToOrder(id,update,pictures)

}
