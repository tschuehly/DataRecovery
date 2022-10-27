package de.tschuehly.datarecoverybackend.service

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import de.tschuehly.datarecoverybackend.dto.TrackingDTO
import de.tschuehly.datarecoverybackend.helpers.CrudService
import de.tschuehly.datarecoverybackend.helpers.PictureContentStore
import de.tschuehly.datarecoverybackend.model.Order
import de.tschuehly.datarecoverybackend.model.Picture
import de.tschuehly.datarecoverybackend.model.Update
import de.tschuehly.datarecoverybackend.repository.OrderProductRepository
import de.tschuehly.datarecoverybackend.repository.OrderRepository
import de.tschuehly.datarecoverybackend.repository.PictureRepository
import de.tschuehly.datarecoverybackend.repository.UserRepository
import org.slf4j.Logger
import org.springframework.data.repository.findByIdOrNull
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import java.time.Duration
import java.time.Instant
import java.util.*

@Suppress("SpringJavaInjectionPointsAutowiringInspection")
@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val orderProductRepository: OrderProductRepository,
    private val mailService: MailService,
    private val pictureRepository: PictureRepository,
    private val pictureContentStore: PictureContentStore,
    private val logger: Logger,
    private val userRepository: UserRepository
) : CrudService<Order, OrderRepository>(orderRepository) {

    fun createOrder(order: Order): Order {
        order.orderDate = Date()
        order.trackingState = orderReceived
        order.orderProduct.id = null
        order.orderProduct = orderProductRepository.save(order.orderProduct)
        order.addUpdateToOrder(Update(title = order.trackingState, order = order))
        val savedOrder = orderRepository.save(order)
        mailService.sendOrderConfirmation(savedOrder)
        return savedOrder
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
                Completed.success -> order.completionDate = Date()
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
        val order: Order =
            orderRepository.findByIdOrNull(id) ?: throw NoSuchElementException("No Order found with ID $id")
        update.order = order
        update.title = "Zusätzliche Bemerkung"
        pictureFiles?.forEach { pictureFile ->
            val picture = pictureRepository.save(Picture(pictureFile.originalFilename, pictureFile.contentType, null))
            pictureContentStore.setContent(picture, pictureFile.inputStream)
            pictureRepository.save(picture)
            update.pictures?.add(picture)
        }
        order.addUpdateToOrder(update)
        orderRepository.save(order)
        mailService.sendManualUpdate(order,update)
        return order
    }

    fun getBySearchTerm(searchTerm: String): List<Order> {
        return repository.findBySearchTerm(
            searchTerm, searchTerm, searchTerm
        )
    }

    fun getByTrackingStateList(stateList: List<String>): List<Order> {
        val orderList = repository.findByTrackingStateInOrderByOrderDateDesc(stateList)
        val auth = SecurityContextHolder.getContext().authentication

        if (auth.authorities.any { it == SimpleGrantedAuthority("ROLE_B2B") }) {
            val email = userRepository.findByUsername(auth.name)?.email
            return orderList.filter { order ->
                order.customer?.email == email
            }
        }
        return orderList
    }

    fun getOrderInfo(): Any {
        return repository.getInfo()
    }

    @Scheduled(cron = "0 0 6 * * *", zone = "Europe/Paris")
    fun checkForCompletionDateSendReviewReminder() {
        logger.info("Check for orders older than 6 Days and sending Email")
        val orders = orderRepository.findByCompletionDateGreaterThanAndCompletionDateLessThan(
            Date.from(Instant.now().minus(Duration.ofDays(7))),
            Date.from(Instant.now().minus(Duration.ofDays(6)))
        ).let { orders -> orders.filter { it.trackingState == Completed.success } }

        orders.forEach {
            mailService.sendReviewReminder(it)
            logger.info("Sending Email to ${it.customer?.firstName} ${it.customer?.lastName}")
        }

    }

    fun getListByTrackingDTO(trackingDTO: List<TrackingDTO>): List<Order> {
        return trackingDTO.mapNotNull {
            orderRepository.findByTrackingIdAndCustomer_PostalCode(it.trackingId, it.postalCode)
        }
    }

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
