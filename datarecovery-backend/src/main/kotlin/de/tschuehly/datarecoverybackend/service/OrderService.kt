package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import de.tschuehly.datarecoverybackend.dto.OrderInfoDTO
import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.helpers.PictureContentStore
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Picture
import de.tschuehly.datarecoverybackend.model.Update
import de.tschuehly.datarecoverybackend.repository.OrderProductRepository
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import de.tschuehly.datarecoverybackend.repository.PictureRepository
import org.slf4j.Logger
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.util.*

@Suppress("SpringJavaInjectionPointsAutowiringInspection")
@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val orderProductRepository: OrderProductRepository,
    private val mailService: MailService,
    private val pictureRepository: PictureRepository,
    private val pictureContentStore: PictureContentStore,
    private val logger: Logger
) : CrudService<Order, OrderRepository>(orderRepository) {
    fun createOrder(order: Order): Order {
        order.orderDate = Date()
        order.trackingState = orderReceived
        order.orderProduct.id = null
        order.orderProduct = orderProductRepository.save(order.orderProduct)
        mailService.sendOrderConfirmation(order)
        return orderRepository.save(order)
    }

    fun updateStatus(order: Order): Order { // TODO: Send Mail if Completiondate is further than deadline
        val previousTrackingState = order.id?.let {
            orderRepository.findByIdOrNull(it)?.trackingState
        }

        val savedOrder = this.update(order)
        if (previousTrackingState != savedOrder.trackingState) {
            when (savedOrder.trackingState) {
                InProcess.parcelReceived -> mailService.sendParcelReceived(order)
                InProcess.firstAnalysis -> mailService.sendFirstAnalysis(order)
                InProcess.orderedFirstPartDispender -> mailService.sendFirstPartDispender(order)
                InProcess.orderedSecondPartDispender -> mailService.sendSecondPartDispender(order)
                InProcess.orderedThirdPartDispender -> mailService.sendThirdPartDispender(order)
                InProcess.readingMemory -> mailService.sendReadingMemory(order)
                InProcess.reRead -> mailService.sendReRead(order)
                InProcess.savingData -> mailService.sendSavingData(order)
                orderReceivedReminderSent -> mailService.sendReminder(order)
            }
        }
        return savedOrder
    }
    fun getByTrackingIdAndPostalCode(trackingId: String, postalCode: String): Order {
        return orderRepository.findByTrackingIdAndCustomer_PostalCode(trackingId, postalCode)
            ?: throw NoSuchElementException("No Order with matching trackingId and postalcode present")
    }

    fun addUpdateToOrder(id: Long, updateString: String, pictureFiles: Array<MultipartFile>?): Order {
        val update: Update = jacksonObjectMapper().readValue(updateString)
        val order: Order = orderRepository.findByIdOrNull(id) ?: throw NoSuchElementException("No Order found with ID $id")
        update.order = order
        pictureFiles?.forEach { pictureFile ->
            val picture = pictureRepository.save(Picture(pictureFile.originalFilename, pictureFile.contentType,null))
            pictureContentStore.setContent(picture, pictureFile.inputStream)
            pictureRepository.save(picture)
            update.pictures?.add(picture)
        }
        order.addUpdateToOrder(update)
        orderRepository.save(order)
        return order
    }

    fun getArchived(page: Number): List<Order> {
        val paging: Pageable = PageRequest.of(page.toInt(), 15)
        return orderRepository.findByTrackingStateInOrderByOrderDateDesc(archiveList, paging)
    }

    fun getActive(): List<Order> = orderRepository.findByTrackingStateNotIn(nonActiveList)

    fun getAwaited(page: Number): List<Order> {
        val paging: Pageable = PageRequest.of(page.toInt(), 15)
        return orderRepository.findByTrackingStateInOrderByOrderDateDesc(listOf(orderReceived, orderReceivedReminderSent), paging)
    }

    fun getOrderInfo(): OrderInfoDTO {
        return OrderInfoDTO(
            activeCount = orderRepository.countOrdersByTrackingStateNotIn(nonActiveList),
            awaitedCount = orderRepository.countOrdersByTrackingStateIn(listOf(orderReceived)),
            archivedCount = orderRepository.countOrdersByTrackingStateIn(archiveList)
        )
    }

    private val archiveList = listOf(
        storage,
        parcelReturned,
        Completed.success, Completed.failure, Completed.legacyComplete
    )
    private val nonActiveList = listOf(orderReceived,orderReceivedReminderSent) + archiveList

    companion object OrderState {
        const val orderReceived = "Auftrag eingegangen"
        const val orderReceivedReminderSent = "Warte auf Ankunft / Erinnerung"

        object InProcess {
            const val parcelReceived = "Paket eingegangen"
            const val firstAnalysis = "Erste Analyse"
            const val orderedFirstPartDispender = "Bestellung erster Teilespender"
            const val orderedSecondPartDispender = "Bestellung zweiter Teilespender"
            const val orderedThirdPartDispender = "Bestellung dritter Teilespender"
            const val waitingForPinout = "Warte auf Pinout"
            const val inRepair = "Reparatur"
            const val readingMemory = "Speicher wird ausgelesen"
            const val reRead = "Speicher wird erneut ausgelesen (Reread)"
            const val savingData = "Abspeicherung Dateien"
        }
        const val storage = "Einlagerung"
        const val parcelReturned = "Rückversand"
        object Completed {
            const val success = "Datenrettung erfolgreich abgeschlossen"
            const val failure = "Datenrettung nicht erfolgreich abgeschlossen"
            const val legacyComplete = "Auftrag abgeschlossen"
        }
    }
}
