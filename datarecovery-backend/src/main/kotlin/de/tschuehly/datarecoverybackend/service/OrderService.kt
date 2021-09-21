package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Picture
import de.tschuehly.datarecoverybackend.model.Update
import de.tschuehly.datarecoverybackend.repository.OrderProductRepository
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import org.slf4j.Logger
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.util.*


@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val orderProductRepository: OrderProductRepository,
    private val mailService: MailService,
    private val pictureService: PictureService,
    private val logger: Logger
) : CrudService<Order, OrderRepository>(orderRepository) {
    fun createOrder(order: Order) {
        order.orderDate = Date()
        order.trackingState = "Auftrag eingegangen"
        order.orderProduct.id = null
        order.orderProduct = orderProductRepository.save(order.orderProduct)
        orderRepository.save(order)
        mailService.sendOrderConfirmation(order)
    }

    fun updateState(order: Order) {
        val savedOrder = this.update(order)
        when (savedOrder.trackingState) {
            parcelReceived -> mailService.sendParcelReceived(order)
        }
    }
    fun getByTrackingIdAndPostalCode(trackingId: String, postalCode: String): Order {
        return orderRepository.findByTrackingIdAndCustomer_PostalCode(trackingId, postalCode)
            ?: throw NoSuchElementException("No Order with matching trackingId and postalcode present")
    }

    fun addUpdateToOrder(id: Long, updateString: String, pictures: Array<MultipartFile>?): Order {
        val update: Update = jacksonObjectMapper().readValue(updateString)
        val order: Order = orderRepository.findByIdOrNull(id) ?: throw NoSuchElementException("")
        update.order = order
        pictures?.forEach { picture ->
            update.pictures?.add(
                pictureService.save(Picture(picture.originalFilename,picture.contentType,update,picture.bytes))
            )
        }
        order.addUpdateToOrder(update)
        orderRepository.save(order)
        return order
    }

    fun getArchived(page: Number): List<Order> {
        val paging: Pageable = PageRequest.of(page.toInt(), 15)
        return orderRepository.findByTrackingStateOrderByOrderDateDesc(orderCompleted,paging)

    }

    fun getActive(): List<Order> {
        return orderRepository.findByTrackingStateNotIn(listOf(orderReceived, orderCompleted))
    }

    fun getAwaited(page: Number): List<Order> {
        val paging: Pageable = PageRequest.of(page.toInt(), 15)
        return orderRepository.findByTrackingStateOrderByOrderDateDesc(orderReceived,paging)
    }


    companion object OrderState {
        val orderReceived = "Auftrag eingegangen"
        val parcelReceived = "Paket eingegangen"
        val firstAnalysis = "Erste Analyse"
        val orderedReplacementParts = "Bestellung Ersatzteile"
        val inRepair = "Reparatur"
        val readingMemory = "Auslesen Speicher"
        val savingData = "Abspeicherung Dateien"
        val parcelReturned = "Rückversand"
        val orderCompleted = "Auftrag abgeschlossen"
    }
}
