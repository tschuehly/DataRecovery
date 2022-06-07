import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-ssd',
  template: `
    <div
      class="py-10 bg-center bg-gray-main bg-cover bg-no-repeat"
      style="background-image: url('/assets/flash_arbeitsweise.png')"
    >
      <div class="flex md:ml-32 py-10 justify-center md:justify-start">
        <h2
          class="text-2xl md:text-4xl leading-relaxed text-center text-silver text-shadow"
        >
          Tobias<br />Jungbauer<br />Datenrettung
        </h2>
      </div>
    </div>
    <div class="bg-white text-center">
      <h1 class="text-2xl md:text-4xl text-black py-5 tracking-wider">
        SSD Datenrettung
      </h1>
    </div>
    <div class="bg-gray-main border-b-2 border-silver pb-8">
      <div class="text-white container py-8 px-3">
        <span class="text-xl md:text-2xl font-bold"
          >SSD Datenrettung:</span
        >
        <pre
          class="whitespace-pre-wrap py-2"
        ><span class="text-bold text-sm md:text-lg text-silver">Updated am 03.12.2021, 18:05 von Tobias Jungbauer</span></pre>
        <pre class="whitespace-pre-wrap text-sm md:text-xl py-8">
Gerne bearbeite ich auch Aufträge, die überhaupt nicht mehr erkannt werden oder von vorherigen Bearbeitern aufgegeben oder bei denen die SSD Datenrettung nur zu einem Vielfachen meines Festpreises angeboten worden ist. <div class="flex justify-end pt-4"><button class="text-base md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">direkt zur Festpreisliste</a></button></div>
<span class="font-semibold text-base md:text-xl">Es wird die SSD Datenrettung angeboten für Speicher:</span>
- die z.B. nicht mehr erkannt werden
- die z.B. Dateien anzeigen, aber sich nicht auslesen lassen
- bei denen z.B. Windows Sie beim Anstecken auffordert zu formatieren

Tatsächlich sind bei nahezu allen defekten SSD-Speicher, die nicht mehr erkannt werden, einer oder mehrere der NAND-Speicherbausteine die Fehlerursache. Warum ist das so? Die SSD eigene Firmware wird ebenfalls auf den Speicherbausteinen abgespeichert.

Wenn vom Chip nun zu viele Teile der Firmware nicht mehr für den Controller lesbar werden, schafft die SSD es nicht mehr zu booten.

Aber dafür gibt es für die meisten Modellen eine Lösung: Man bootet die SSD über das externe Hochladen der Firmware (in den RAM der SSD) und ermöglicht dadurch den Zugriff auf die Servicearea bzw. später auf die Userarea, wo sich auch die gewünschten Dateien befinden.
  </pre>
        <div class="flex grid-cols-2 flex-wrap gap-4">
          <img
            class="h-96 object-cover object-right"
            src="assets/SSD_beispiel.jpg"
          />
        </div>
        <pre class="whitespace-pre-wrap text-sm md:text-xl py-8">

In meiner Datenbank sind etliche verschiedene „Loader“ für verschiedene Controller bzw. FW Versionen, die dieses Prozedere ermöglichen.

<div class="flex grid-cols-3 flex-wrap gap-4">
  <img class="h-80 object-cover object-left" src="assets/articles/ssd_1.PNG">
  <img class="h-80 object-cover object-left" src="assets/articles/ssd_2.PNG">
</div>

Dadurch kann die SSD initialisiert werden und die Daten einmalig ausgelesen werden:

<div class="flex grid-cols-3 flex-wrap gap-4">
  <img class="h-80 object-cover object-left" src="assets/articles/ssd_3.PNG">
  <img class="h-80 object-cover object-left" src="assets/articles/ssd_4.PNG">
  <img class="h-80 object-cover object-left" src="assets/articles/ssd_5.PNG">
</div>

Entscheidend für den Datenrettungserfolg ist die Auslesequalität der einzelnen Speicherbausteine.
Merfache Leseversuche, das Anpassen der Lesetimings als auch der Umgebungstemperatur schaffen hier aber oftmals auch bei schlechten Fällen Besserung.


Abgesehen davon biete ich auch das Beseitigen von Hardwareschäden seitens der austauschbaren Elektronik an.
Leider werden im Moment bei mir nur SATA basierte SSD-Festplatten unterstützt. Defekte M.2 SSDs daher nur, wenn diese nicht auf PCIe (NVMe), sondern ebenfalls auf das SATA Protokoll basieren.

Festpreisliste nach von Ihnen definierten Erfolg:
Defekte SSD-Festplatte bis 512GB Festplattenkapazität: 275,00 €*
Defekte SSD-Festplatte bis 1TB Festplattenkapazität: 299,00 €*
Defekte SSD-Festplatte bis 2TB Festplattenkapazität: 349,00 €*
Defekte SSD-Festplatte bis 4TB Festplattenkapazität: 449,00 €*
*bereits inkl. 19% Mehrwertsteuer

Falls noch Fragen offen sind rufen Sie am besten unter 0841 12840705 an oder schreiben eine Email an: info@jungbauerdatenrettung.de
    </pre>
      </div>
    </div>
  `,
  styles: [],
})
export class SsdComponent {
  constructor(public scrollService: ScrollService) {}
}
