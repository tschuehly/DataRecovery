package de.tschuehly.datarecoverybackend.controller

import de.tschuehly.datarecoverybackend.dto.OrderListDTO
import de.tschuehly.datarecoverybackend.helpers.CrudController
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import de.tschuehly.datarecoverybackend.service.OrderService
import org.slf4j.Logger
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("api/order")
class OrderController(
    val orderService: OrderService,
    private val logger: Logger
) :
    CrudController<Order, OrderRepository, OrderService>(orderService) {
    @PostMapping("/create")
    fun createOrder(@RequestBody order: Order) = orderService.createOrder(order)

    @PostMapping("/updateStatus")
    fun updateStatus(@RequestBody order: Order) = orderService.updateStatus(order)

    @GetMapping("/info")
    fun getOrderInfo() = orderService.getOrderInfo()

    @GetMapping("/state")
    fun getByTrackingStateList(
        @RequestParam("state") stateList: List<String>
    ): List<Order> = orderService.getByTrackingStateList(stateList)

    @GetMapping("/search")
    fun getBySearchTerm(
        @RequestParam searchTerm: String
    ): List<Order> = orderService.getBySearchTerm(searchTerm)

    @GetMapping("/tracking")
    fun getByTrackingId(
        @RequestParam trackingId: String,
        @RequestParam postalCode: String
    ): Order = orderService.getByTrackingIdAndPostalCode(trackingId, postalCode)

    @PostMapping("/addUpdate/{id}", consumes = ["multipart/form-data"])
    fun addUpdateToOrder(
        @PathVariable id: Long,
        @RequestParam("pictures", required = false) pictures: Array<MultipartFile>?,
        @RequestParam("update", required = false) update: String
    ): Order = orderService.addUpdateToOrder(id, update, pictures)
}
