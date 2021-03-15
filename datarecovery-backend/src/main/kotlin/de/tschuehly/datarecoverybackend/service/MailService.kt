package de.tschuehly.datarecoverybackend.service

import org.springframework.context.annotation.Bean
import org.springframework.mail.javamail.JavaMailSenderImpl

import org.springframework.mail.javamail.JavaMailSender
import java.util.*
import org.springframework.mail.SimpleMailMessage
import org.springframework.stereotype.Service


@Service
class MailService(val javaMailSender: JavaMailSender) {

    fun sendEmail(text: String){
        val msg = SimpleMailMessage()
        msg.setTo("thomas.schuehly@outlook.com")

        msg.setSubject("Testing from Spring Boot")
        msg.setText(text)

        javaMailSender.send(msg)
    }
}
