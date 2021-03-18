package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.model.Order
import org.springframework.context.annotation.Bean
import org.springframework.mail.javamail.JavaMailSenderImpl

import org.springframework.mail.javamail.JavaMailSender
import java.util.*
import org.springframework.mail.SimpleMailMessage
import org.springframework.stereotype.Service
import org.springframework.core.io.ClassPathResource

import org.springframework.mail.javamail.MimeMessageHelper

import javax.mail.internet.MimeMessage





@Service
class MailService(val javaMailSender: JavaMailSender) {

    fun sendOrderConfirmation(order: Order){

        val msg = javaMailSender.createMimeMessage()


        val helper = MimeMessageHelper(msg, true)

        order.customer?.email?.let { helper.setTo(it) }

        helper.setSubject("Ihr Auftrag zur Datenrettung | Tobias Jungbauer Datenrettung")

        helper.setText("<h1>Ihr Auftrag wurde entgegengenommen. Bitte senden Sie uns nun Ihren Datenträger an folgende Adresse zu:</h1>" +
                "Sie können den aktuellen Status hier einsehen:" +
                "<a href=\"http://localhost:4200/tracking/${order.trackingId}/${order.customer?.postalCode}\">Aktueller Status</a>", true)


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
