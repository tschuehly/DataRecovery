package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Picture
import de.tschuehly.datarecoverybackend.model.Update
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import org.slf4j.Logger
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.util.*
import kotlin.NoSuchElementException
import kotlin.collections.ArrayList

@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val mailService: MailService,
    private val logger: Logger
) : CrudService<Order, OrderRepository>(orderRepository) {
    fun createOrder(order: Order) {
        order.orderDate = Date()
        order.trackingState = "Auftrag eingegangen"
        orderRepository.save(order)
        logger.info(order.toString())
        mailService.sendOrderConfirmation(order)
    }

    fun updateState(order: Order) {
        val savedOrder = this.update(order) // Bei jedem statusänderung
        when (savedOrder.trackingState) {
            parcelReceived -> mailService.sendParcelReceived(order)
        }
    }
    fun getByTrackingIdAndPostalCode(trackingId: String, postalCode: String): Order {
        return orderRepository.findByTrackingIdAndCustomer_PostalCode(trackingId, postalCode)
            ?: throw NoSuchElementException("No Order with matching trackingId and postalcode present")
    }

    fun addUpdateToOrder(id: Long, multipartFile: Array<MultipartFile>): Order {
        val update = Update("", Date(), ArrayList())
        val order: Order = orderRepository.findByIdOrNull(id) ?: throw NoSuchElementException()
        multipartFile.forEach { file -> update.pictures.add(Picture(file.name,file.contentType,file.bytes)) }

        order.addUpdateToOrder(update)

        orderRepository.save(order)
        return order
    }
    companion object orderState {
        val orderReceived = "Auftrag eingegangen"
        val parcelReceived = "Paket eingegangen"
        val firstAnalysis = "Erste Analyse"
        val orderedReplacementParts = "Bestellung Ersatzteile"
        val inRepair = "Reparatur"
        val readingMemory = "Auslesen Speicher"
        val savingData = "Abspeicherung Dateien"
        val parcelReturned = "Rückversand"
    }
}
