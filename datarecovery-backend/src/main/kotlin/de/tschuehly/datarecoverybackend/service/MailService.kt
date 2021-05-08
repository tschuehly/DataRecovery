package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.model.Order
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.Resource
import org.springframework.core.io.ResourceLoader
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import java.io.IOException

import org.springframework.util.FileCopyUtils





@Service
class MailService(val javaMailSender: JavaMailSender, val resourceLoader: ResourceLoader) {

    @Value("\${MAIL_SENDER_USERNAME}")
    lateinit var emailAdr: String

    fun sendOrderConfirmation(order: Order){ //TODO: Error Handling

        val msg = javaMailSender.createMimeMessage()
        msg.setFrom(emailAdr)
        val helper = MimeMessageHelper(msg, true)

        order.customer?.email?.let { helper.setTo(it) }

        helper.setSubject("Ihr Auftrag zur Datenrettung | Tobias Jungbauer Datenrettung")
        try {
            val html = resourceLoader.getResource("classpath:templates/bestaetigung.html").file
                .readText(charset = Charsets.UTF_8)
            order.customer?.postalCode?.let { html.replace("order.customer.postalCode", it) }
            order.trackingId?.let { html.replace("order.trackingId", it) }
            helper.setText(html,true)
        }catch (  e: IOException){
            println("IOException "+e)
        }
        /*
        helper.setText("<h1>Ihr Auftrag wurde entgegengenommen. Bitte senden Sie uns nun Ihren Datenträger an folgende Adresse zu:</h1>" +
                "Sie können den aktuellen Status hier einsehen:" +
                "<a href=\"http://localhost:4200/tracking/${order.trackingId}/${order.customer?.postalCode}\">Aktueller Status</a>", true)
*/

        javaMailSender.send(msg)

    }
    fun sendParcelReceived (order: Order){
        val msg = javaMailSender.createMimeMessage()

        val helper = MimeMessageHelper(msg, true)

        order.customer?.email?.let { helper.setTo(it) }

        helper.setSubject("Ihr Paket ist angekommen")

        helper.setText("<h1>Ihr Paket ist angekommen:</h1>" +
                "Sie können den aktuellen Status hier einsehen:" +
                "<a href=\"http://localhost:4200/tracking/${order.trackingId}/${order.customer?.postalCode}\">Aktueller Status</a>", true)


        javaMailSender.send(msg)

    }
}
