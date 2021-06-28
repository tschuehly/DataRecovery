package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.model.Order
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.ResourceLoader
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import javax.mail.internet.MimeMessage
import java.text.SimpleDateFormat

@Service
class MailService(val javaMailSender: JavaMailSender, val resourceLoader: ResourceLoader) {

    @Value("\${MAIL_SENDER_USERNAME}")
    lateinit var emailAdr: String

    fun createMessage(): MimeMessage {
        val msg = javaMailSender.createMimeMessage()
        msg.setFrom(emailAdr)
        return msg
    }

    fun sendOrderConfirmation(order: Order){ //TODO: Error Handling
        val msg = createMessage()
        val helper = MimeMessageHelper(msg, true)
        order.customer?.email?.let { helper.setTo(it) }

        helper.setSubject("Ihr Auftrag zur Datenrettung | Tobias Jungbauer Datenrettung")
        var html = resourceLoader.getResource("classpath:templates/emailtemplate.html").file
            .readText(charset = Charsets.UTF_8)
        val body = getOrderConfirmationBody(order)
        html = html.replace("MESSAGEBODY", body)
        var dateFormat = SimpleDateFormat("dd.MM.yyyy");
        html = html.replace("MESSAGETITLE", "Ihre Auftragsbest&#228;tigung vom ${dateFormat.format(order.orderDate)}")
        helper.setText(html,true)

        javaMailSender.send(msg)
        helper.setTo("ammersee.datenrettung@gmail.com")
        javaMailSender.send(msg)
    }

    fun sendParcelReceived (order: Order){
        val msg = createMessage()

        val helper = MimeMessageHelper(msg, true)

        order.customer?.email?.let { helper.setTo(it) }


        helper.setSubject("Ihr Paket ist angekommen | Tobias Jungbauer Datenrettung")
        var html = resourceLoader.getResource("classpath:templates/emailtemplate.html").file
            .readText(charset = Charsets.UTF_8)
        val body = getParcelReceived(order)
        html = html.replace("MESSAGEBODY", body)
        var dateFormat = SimpleDateFormat("dd.MM.yyyy");
        html = html.replace("MESSAGETITLE", "Ihr Auftrag vom ${dateFormat.format(order.orderDate)}")
        helper.setText(html,true)

        javaMailSender.send(msg)
    }

    fun getParcelReceived(order: Order) = """
        <h2 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #706f70;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
        Ihr Paket ist angekommen und wird nun bearbeitet</h2><p style="Margin-top: 16px;Margin-bottom: 0;"><br />
        
        <span style="font-weight: bold">TrackingId:</span> 7fb274bc-f00e-4a97-9496-cd41d399e271</p>
        Sie können den aktuellen Status hier einsehen:
        <a href=https://www.jungbauerdatenrettung.de//tracking/${order.trackingId}/${order.customer?.postalCode}>Aktueller Status</a>
        <br/>
        <h2 style="Margin-top: 20px;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #706f70;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">Ihre Auftragsdaten</h2><p style="Margin-top: 16px;Margin-bottom: 20px;">
        ${order.customer?.firstName} ${order.customer?.lastName}<br />
        ${order.customer?.email}<br />
        ${order.customer?.street} <br />
        ${order.customer?.postalCode} ${order.customer?.city}<br />
        ${order.customer?.tel} <br />
        <br />
        """
    fun getOrderConfirmationBody(order: Order) = """
        <h2 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #706f70;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
        Bitte versenden Sie Ihre Datenträger verfolgbar an folgende Adresse:</h2><p style="Margin-top: 16px;Margin-bottom: 0;"><br />
        
        Tobias Jungbauer<br />
        Datenrettung<br />
        Am Stein 9<br />
        85049 Ingolstadt<br />
        
        
        
        &nbsp;</p><h2 style="Margin-top: 20px;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #706f70;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">Ihre Auftragsdaten</h2><p style="Margin-top: 16px;Margin-bottom: 20px;">
        ${order.customer?.firstName} ${order.customer?.lastName}<br />
        ${order.customer?.email}<br />
        ${order.customer?.street} <br />
        ${order.customer?.postalCode} ${order.customer?.city}<br />
        ${order.customer?.tel} <br />
        <br />
        <br />
        <span style="font-weight: bold">Produkt:</span> ${order.orderProduct.category?.title} ${order.orderProduct.name}<br />
        <span style="font-weight: bold">Preis:</span> ${"%.2f".format(order.orderProduct.price)} €<br />
        <span style="font-weight: bold">Ersatzdatenträger: </span>${order.replacement}<br />
        """ + if(order.monthlyPayment == 2){
          """<span style="font-weight: bold">Ratenzahlung: </span> 2 Monatsraten (1% Gebühr)<br />"""
        }else{
            ""
        }
}
