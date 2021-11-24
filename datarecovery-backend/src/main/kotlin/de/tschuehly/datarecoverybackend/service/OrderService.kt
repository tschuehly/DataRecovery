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
        order.addUpdateToOrder(Update(title = order.trackingState, order = order))
        mailService.sendOrderConfirmation(order)
        return orderRepository.save(order)
    }

    fun updateStatus(order: Order): Order {
        val previousTrackingState = order.id?.let {
            orderRepository.findByIdOrNull(it)?.trackingState
        }

        if (previousTrackingState != order.trackingState) {
            when (order.trackingState) {
                InProcess.parcelReceived -> mailService.sendParcelReceived(order)
                InProcess.firstAnalysis -> mailService.sendFirstAnalysis(order)
                InProcess.orderedFirstPartDispenser -> mailService.sendFirstPartDispender(order)
                InProcess.orderedSecondPartDispenser -> mailService.sendSecondPartDispender(order)
                InProcess.orderedThirdPartDispenser -> mailService.sendThirdPartDispender(order)
                InProcess.readingMemory -> mailService.sendReadingMemory(order)
                InProcess.reRead -> mailService.sendReRead(order)
                InProcess.savingData -> mailService.sendSavingData(order)
                orderReceivedReminderSent -> mailService.sendReminder(order)
            }
            order.addUpdateToOrder(Update(title = order.trackingState, order = order))

        }
        return update(order)
    }
    fun getByTrackingIdAndPostalCode(trackingId: String, postalCode: String): Order {
        return orderRepository.findByTrackingIdAndCustomer_PostalCode(trackingId, postalCode)
            ?: throw NoSuchElementException("No Order with matching trackingId and postal code present")
    }

    fun addUpdateToOrder(id: Long, updateString: String, pictureFiles: Array<MultipartFile>?): Order {
        val update: Update = jacksonObjectMapper().readValue(updateString)
        val order: Order = orderRepository.findByIdOrNull(id) ?: throw NoSuchElementException("No Order found with ID $id")
        update.order = order
        update.title = "Zusätzliche Bemerkung"
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
            const val orderedFirstPartDispenser = "Bestellung erster Teilespender"
            const val orderedSecondPartDispenser = "Bestellung zweiter Teilespender"
            const val orderedThirdPartDispenser = "Bestellung dritter Teilespender"
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
