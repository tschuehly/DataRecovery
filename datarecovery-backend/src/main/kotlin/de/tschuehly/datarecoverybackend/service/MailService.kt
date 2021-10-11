package de.tschuehly.datarecoverybackend.service

import de.tschuehly.datarecoverybackend.model.Order
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.io.ResourceLoader
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Service
import java.text.SimpleDateFormat
import java.util.Date
import javax.mail.internet.MimeMessage

@Service
class MailService(
    val javaMailSender: JavaMailSender,
    val resourceLoader: ResourceLoader
) {

    @Value("\${MAIL_SENDER_USERNAME}")
    lateinit var emailAdr: String

    fun getMimeMessageAndHelper(order: Order): Pair<MimeMessage, MimeMessageHelper> {
        val msg = javaMailSender.createMimeMessage()
        msg.setFrom(emailAdr)
        val helper = MimeMessageHelper(msg, true)
        order.customer?.email?.let { helper.setTo(it) }
        return Pair(msg, helper)
    }

    fun getHtmlEmail(body: String, orderDate: Date?): String {
        var html = resourceLoader.getResource("classpath:templates/emailtemplate.html").file
            .readText(charset = Charsets.UTF_8)
        html = html.replace("MESSAGEBODY", body)
        html = html.replace("MESSAGETITLE", "Ihr Auftrag vom ${SimpleDateFormat("dd.MM.yyyy").format(orderDate)}")
        return html
    }

    fun sendStatusUpdateEmail(order: Order, subject: String, content: String) {
        val (msg, helper) = getMimeMessageAndHelper(order)

        helper.setSubject(subject)
        // language=HTML
        val statusString = """
            <h2 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: bold;color: #2e2e2e;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
            Der Status Ihres Auftrages wurde geändert zu: <br/><br/>
            </h2>"""
        val body = statusString + content + getTrackingFooter(order)
        val email = getHtmlEmail(body, order.orderDate)
        helper.setText(email, true)
        javaMailSender.send(msg)
    }

    fun sendOrderConfirmation(order: Order) { // TODO: Error Handling
        val (msg, helper) = getMimeMessageAndHelper(order)
        helper.setSubject("Ihr Auftrag zur Datenrettung | Tobias Jungbauer Datenrettung")
        val email = getHtmlEmail(getOrderConfirmationBody(order), order.orderDate)
        helper.setText(email, true)
        javaMailSender.send(msg)
        helper.setTo("ammersee.datenrettung@gmail.com")
        javaMailSender.send(msg)
    }

    fun sendParcelReceived(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ihr Paket ist angekommen | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
                <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                        Ihr Paket ist angekommen und wird nun bearbeitet <br/>
                </h3>
                """
        )
    }

    fun sendFirstAnalysis(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ihr Datenträger wird analysiert | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
            <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                    Erste Analyse: <br/>
            </h3>
            
            <p style="Margin-top: 16px;Margin-bottom: 0;">
            In der ersten Analyse wird Ihr Speicher nun nach dem Ursprung des Fehlers untersucht.<br>
            So können beispielsweise Schleifspuren auf einem Schreib-/Lesekopf einen Headcrash nachweisen und uns Hinweise über den Zustand der Oberfläche geben.<br/>
            </p>
            """
        )
    }

    fun sendFirstPartDispender(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ein Teilespender für Ihren Datenträger wird bestellt | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
                <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                        Bestellung erster Teilespender: <br/>
                </h3>
                
                <p style="Margin-top: 16px;Margin-bottom: 0;">
                Die Reparatur Ihres Speichers benötigt einen kompatiblen Teilespender, um Datenzugriff zu ermöglichen. <br/>
                Diesen finde Ich oftmals von Privatpersonen wie z.B. auf Ebay.<br/>
                </p>"""
        )
    }

    fun sendSecondPartDispender(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ein zweiter Teilespender für Ihren Datenträger wird bestellt | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
            <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                    Bestellung zweiter Teilespender: <br/>
            </h3>
            
            <p style="Margin-top: 16px;Margin-bottom: 0;">
            Der vorherige Teilespender war entweder nicht kompatibel oder nahm zu schnell neuen Schaden.<br />
            Es wird nun mit einem zweiten Teilespender ein neuer Versuch gestartet.<br/>
            </p>"""
        )
    }

    fun sendThirdPartDispender(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ein dritter Teilespender für Ihren Datenträger wird bestellt | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
            <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                    Bestellung dritter Teilespender: <br/>
            </h3>
            
            <p style="Margin-top: 16px;Margin-bottom: 0;">
            Der vorherige Teilespender war entweder nicht kompatibel oder nahm zu schnell neuen Schaden.<br/>
            Es wird nun mit einem dritten Teilespender der letzte Versuch gestartet.<br/>
            </p>"""
        )
    }

    fun sendReadingMemory(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ihr Datenträger wird nun ausgelesen | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
            <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                    Auslesen Speicher: <br/>
            </h3>
            <p style="Margin-top: 16px;Margin-bottom: 0;">
            Es besteht Datenzugriff auf Ihren Speicher. Dieser wird nun Sektor für Sektor ausgelesen.<br/>
            Bitte melden Sie sich falls es Dateien gibt die priorisiert werden sollen.<br/>
            </p>"""
        )
    }

    fun sendSavingData(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ihre Daten werden nun abgespeichert | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
            <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                    Abspeicherung Dateien: <br/>
            </h3>
            <p style="Margin-top: 16px;Margin-bottom: 0;">
            Die geretteten Dateien werden nun auf den Ersatzdatenträger abgespeichert.<br/>
            </p>"""
        )
    }

    fun sendReRead(order: Order) {
        sendStatusUpdateEmail(
            order,
            subject = "Ihr Datenträger wird erneut ausgelesen | Tobias Jungbauer Datenrettung",
            // language=HTML
            content = """
            <h3 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 16px;text-decoration: underline;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
                    Speicher wird erneut ausgelesen (reread): <br/>
            </h3>
            <p style="Margin-top: 16px;Margin-bottom: 0;">
            Der erste Lesedurchgang beinhaltet Fehler.<br/>
            Es wird nun versucht durch erneute Lesezugriffe diese Fehler zu reduzieren oder bestenfalls vollständig zu beseitigen.
            </p>"""
        )
    }

    // language=HTML
    fun getTrackingFooter(order: Order) = """    
        <br/>
        <span style="font-weight: bold">TrackingId:</span> 7fb274bc-f00e-4a97-9496-cd41d399e271</p>
        Sie können den aktuellen Status hier einsehen:
        <a href=https://www.jungbauerdatenrettung.de//tracking/${order.trackingId}/${order.customer?.postalCode}>Aktueller Status</a>
        <br/>
        <h2 style="Margin-top: 20px;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">Ihre Auftragsdaten</h2><p style="Margin-top: 16px;Margin-bottom: 20px;">
        ${order.customer?.firstName} ${order.customer?.lastName}<br />
        ${order.customer?.email}<br />
        ${order.customer?.street} <br />
        ${order.customer?.postalCode} ${order.customer?.city}<br />
        ${order.customer?.tel} <br />
        <br />
        """
    // language=HTML
    fun getOrderConfirmationBody(order: Order) = """
        <h2 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">
        Bitte versenden Sie Ihre Datenträger verfolgbar an folgende Adresse:</h2>
        
        <p style="Margin-top: 16px;Margin-bottom: 0;"><br />
        Tobias Jungbauer<br />
        Datenrettung<br />
        Am Stein 9<br />
        85049 Ingolstadt<br />
        &nbsp;</p>
        
        <h2 style="Margin-top: 20px;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #2e2e2e;font-size: 18px;line-height: 26px;font-family: Cabin,Avenir,sans-serif;">Ihre Auftragsdaten</h2><p style="Margin-top: 16px;Margin-bottom: 20px;">
        ${order.customer?.firstName} ${order.customer?.lastName}<br />
        ${order.customer?.email}<br />
        ${order.customer?.street} <br />
        ${order.customer?.postalCode} ${order.customer?.city}<br />
        ${order.customer?.tel} <br />
        <br />
        <span style="font-weight: bold">Produkt:</span> ${order.orderProduct.category?.title} ${order.orderProduct.name}<br />
        <span style="font-weight: bold">Preis:</span> ${"%.2f".format(order.orderProduct.price)} €<br />
        <span style="font-weight: bold">Ersatzdatenträger: </span>${order.replacement}<br />
        ${if (order.note == null) "" else "<span style=\"font-weight: bold\">Zusätzliche Bemerkungen: </span>${order.note}<br />"}
        """ + if (order.monthlyPayment == 2) {
        """<span style="font-weight: bold">Ratenzahlung: </span> 2 Monatsraten (1% Gebühr)<br />"""
    } else {
        ""
    }
}
