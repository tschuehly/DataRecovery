package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import org.slf4j.Logger
import org.springframework.stereotype.Service
import java.util.*

@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val mailService: MailService,
    private val logger: Logger
) : CrudService<Order,OrderRepository>(orderRepository) {
    fun createOrder(order: Order){
        order.orderDate = Date()
        order.trackingState = "Auftrag eingegangen"
        orderRepository.save(order)
        logger.info(order.toString())
        mailService.sendEmail(order.toString())

    }

    fun getByTrackingIdAndPostalCode(trackingId: String, postalCode: String) : Order {
        return orderRepository.findByTrackingIdAndCustomer_PostalCode(trackingId,postalCode) ?:
        throw NoSuchElementException("No Order with matching trackingId and postalcode present")
    }
}
