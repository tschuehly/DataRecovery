import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';
@Component({
  selector: 'app-hdd',
  template: `
    <div
      class="py-10 bg-right bg-gray-main bg-cover bg-no-repeat"
      style="background-image: url('/assets/hdd_arbeitsweise.png')"
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
        Datenrettung Festplatte
      </h1>
    </div>
    <div class="bg-gray-main text-white border-b-2 border-silver pb-8">
      <div class="container py-8 px-3">
        <span class=" text-xl md:text-2xl font-bold"
          >Datenrettung der HDD-Festplatte</span
        >
        <pre class="whitespace-pre-wrap py-2">
<span class="whitespace-pre-wrap py-2 text-bold text-sm md:text-lg text-silver">Updated am 27.03.22, 07:55 von Tobias Jungbauer</span> </pre>
<pre class="whitespace-pre-wrap text-sm md:text-xl py-8">
Gerne nehme ich auch Aufträge an, die von vorherigen Laboren aufgegeben oder die Datenrettung zu nur wesentlich höheren Preisen angeboten wurde. Ich stehe zu 100% hinter meinem Tun. Meine Mission ist es die professionelle Datenrettung für möglichst jeden zugänglich zu machen. Weiteres dazu und warum ich dafür Festpreise als die fairste und transparenteste Methode halte erfahren Sie <a href="/blog/datenrettung-kosten" class="underline font-bold">hier</a>.<div class="flex justify-end pt-4"><button class="text-lg md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">direkt zur Festpreisliste</a></button></div>
<span class="font-semibold text-base md:text-xl">Es wird die Datenrettung für HDD-Festplatten angeboten, die z.B.:</span>
- Dateien anzeigen, sich aber nicht auslesen lassen
- nicht mehr erkannt werden
- "klackern" oder "fiepsen" (mechanische Schäden)
- Fehlermeldungen ausgeben (wie CRC-Fehler oder E/A-Fehler)

<span class="font-semibold text-base md:text-xl">Typische Ursachen dabei sind:</span>
- defekte Schreib-/Leseköpfe nach einem Headcrash (z.B. durch Erschütterung oder hohes Alter)
- beschädigte Oberflächen, die zu schlecht lesbaren Bereichen sowohl in Userarea als auch Servicearea führen
- defektes PCB (z.B. durch das Verwenden eines falschen Netzteils)
- fehlerhafte ServiceArea bzw. Systemfiles ("Firmware Bug", oftmals korrupte Fehlerlisten)
<span class="text-white">
<span class="font-semibold text-base md:text-xl">Vorgehensweise HDD-Datenrettung:</span>
❶ Fehlerdiagnose: hierfür werden z.B. über ein COM Terminal Fehlermeldungen und ROM (z.B. ServoError, SIM Error, etc.) ausgelesen.
❷ Reparatur unter Reinraumbedingungen: die HDD von fehlerhaften mechanischen Bauteilen befreit (oftmals Schreib-/Leseköpfe) und ServiceArea bzw. Systemfiles werden modifiziert, bis der Zugriff auf Ihre Dateien möglich ist.
❸ Auslesen: Die Daten der Festplatte werden Sektor für Sektor ausgelesen.

<span class="font-semibold text-base md:text-xl">Übliche Arbeiten dabei sind:</span>
<span class="underline">- mikroskopische Analyse und Austausch der Schreib-/Leseköpfe:</span>
<div class="flex grid-cols-3 flex-wrap gap-4">
<img class="h-80 object-cover object-center" src="assets/HDDarbeitsweise_head.JPG">
<img class="h-80 object-cover object-right" src="assets/hdd_arbeitsweise_headreplacement.jpg">
</div>
Der Zustand der Sensoren gibt direkt Auskunft über den Zustand der jeweiligen Oberfläche.
Sollten hier Schleifspuren sichtbar sein spricht das für eine ebenfalls beschädigte Oberflächenstruktur.
Entscheidend für den Datenrettungserfolg ist der Zustand der einzelnen Oberflächen.

Der Abstand zwischen Sensoren und der jeweiligen Oberfläche beträgt gerade mal 0,004µm.
Im Vergleich:
Fingerabdruck ~4µm
Staubkorn ~10µm
Haar ~70µm

Jede Veruneinigung beschädigt daher potenziell Oberfläche und Leseköpfe.

<span class="underline">- Arbeiten an der ServiceArea bzw. Systemfiles und BOOT-ROM:</span>
<div class="flex grid-cols-3 flex-wrap gap-4">
  <img class="h-80 object-cover object-left" src="assets/articles/sa-1.PNG">
  <img class="h-80 object-cover object-left" src="assets/articles/sa-2.PNG">
</div>
Bei einem Headcrash kommt es zur Berührung zwischen Schreib-/Lesekopf und der jeweligen Oberfläche.
Dabei wird die Oberfläche gerne auch im Bereich der Servicearea beschädigt.
Servicemodule werden dadurch für die Festplatte nicht mehr lesbar, was der Funktion schadet.
Unsere Aufgabe ist daher diese beschädigten Module zu reparieren und zu einer anderen Stelle zu verschieben.

<span class="underline">- Plattern Swap, z.B. um den Motor zu tauschen oder die Oberflächen nach Beschädigungen zu inspizieren:</span>
<div class="flex grid-cols-3 flex-wrap gap-4">
  <img class="h-80 object-cover object-right" src="assets/articles/platternswap_1.jpg">
  <img class="h-80 object-cover object-center" src="assets/articles/platternswap_2 (2).jpg">
</div>
Als Alternative zur Analyse der Schreib-/Leseköpfe kann man auch die Oberflöchen direkt inspizieren.
Das ist z.B. nötig, wenn die Festplatte bereits woanders neue Schreib-/Leseköpfe bekommen hat und die Originalen nicht mehr vorhanden sind.
Auch nutzt man diese Technik, wenn der Motor getauscht werden muss.

<span class="underline">- Austausch und Anlernen des PCB (printed circuit board):</span>
<div class="flex grid-cols-3 flex-wrap gap-4">
  <img class="h-80 object-cover object-center" src="assets/HDD_arbeitsweise_PCB2.jpg">
  <img class="h-80 object-cover object-center" src="assets/HDD_arbeitsweise_PCB1.jpg">
</div>
Bei modernen Festplatten muss für ein Austausch in der Regel immer die originale BOOT-ROM auf das neue PCB übertragen werden.
Grund dafür sind viele verschiedene FW Versionen und festplattenspezifische (adaptive) Module innerhalb der BOOT-ROM.
Bei einigen Festplattenmodellen wird die ServiceArea mit einer Verschlüsselung (z.B. SED bei WD) gesichert.
Um hier dennoch die nötigen Arbeiten durchführen zu können gibt es spezielle "unlocked PCBs".

<span class="underline">- die Herstellung von Werkzeuge für die Datenrettung:</span>
<div class="flex grid-cols-3 flex-wrap gap-4">
  <img class="h-80 object-cover object-right" src="assets/1640221182228.jpg">
  <img class="h-80 object-cover object-center" src="assets/Chitubox.PNG">
</div>
Nicht für jedes Festplattenmodell gibt es passendes Werkzeug zum Austausch der Schreib-/Leseköpfe direkt zu Kaufen.
Vorallen moderne Festplatten wie Seagate Rosewood und co. bieten hier nur sehr wenig Platz im Inneren.
Eigenes Werkzeug mit einer Genauigkeit von 35µm Herstellen zu können bringt daher einige Vorteile.

<span class ="underline">-Alle Arbeiten werden ausschließlich unter Reinraumbedingungen nach DIN 14644-1 ISO 5, ESD-geschützt und vor Ort durchgeführt:</span>
<img class="h-80 object-cover object-right" src="assets/hdd_arbeitsweise_4.jpg">
Die Kabine erzeugt ein Überdruck durch ein HEPA Filter des Typs H14.
Dieser besitzt einen Abscheidegrad von 99,995%. Das bedeutet, dass der Filter bei einer Partikelgröße von 0,12 μm (nach MPPS) mindestens 99,995% aller Partikel herausfiltert. Der Überdruck verhindert, dass von außerhalb Partikel hineinfallen können.

<span class ="font-semibold text-base md:text-xl">Beispiele spektakulärer Schäden:</span>

<div class="flex grid-cols-3 flex-wrap gap-4">
❶<img class="h-80 object-cover object-right" src="assets/articles/wasserschaden.jpg">
❷<img class="h-80 object-cover object-right" src="assets/articles/1648419003590-min.jpg">
❸<img class="h-80 object-cover object-right" src="assets/articles/1648418965066-min.jpg">
</div>
❶ Wasserschäden
❷ stark Verformte/zerfetzte Schreib-/Leseköpfe
❸ Beschädigte Oberflächen

Festpreisliste nach von Ihnen definierten Erfolg:
Defekte HDD-Festplatte bis 500GB Festplattenkapazität: 299,00 €*
Defekte HDD-Festplatte bis 1TB Festplattenkapazität: 349,00 €*
Defekte HDD-Festplatte bis 2TB Festplattenkapazität: 399,00 €*
Defekte HDD-Festplatte bis 4TB Festplattenkapazität: 499,00 €*
Defekte HDD-Festplatte bis 6TB Festplattenkapazität: 599,00 €*
*bereits inkl. 19% Mehrwertsteuer
</span>
        <h2 class="text-base md:text-xl underline font-bold my-6">Verwendete Hard- Und Software</h2><pre class="whitespace-pre-wrap text-sm md:text-xl py-8">
Das PC-3000 UDMA ist eine Hardware-Software-Lösung zur Diagnose und Reparatur von Festplatten auf Basis von SATA- (Serial ATA) und ATA- (IDE) Schnittstellen für zahlreiche Hersteller (Seagate, Western Digital, Fujitsu, Samsung, Maxtor, Quantum, IBM (HGST) ), HITACHI, TOSHIBA), für verschiedene Kapazitäten (von 500 MB bis 8 TB) und verschiedene Formfaktoren: 3,5 "- Desktop-Laufwerke, 2,5" - und 1,8 "- Laptop-Laufwerke.
Das PC-3000 UDMA bildet zusammen mit dem Data Extractor UDMA das PC-3000 UDMA Professional-System, mit dem Daten von der SATA-, ATA- (IDE-) Festplatte wiederhergestellt werden können. Wenn Sie Ihre Festplatte reparieren lassen möchten, benötigen Sie eine Lösung wie durch das PC-3000 UDMA. </pre>
Ein zweikanaliger Spannungsversorgungsadapter befindet sich auf der Platinensteuerung und bietet eine unabhängige Spannungsversorgung von +5 V, +12 V sowie Schutz vor Überspannungs- und Stromüberlastung. Im Notfall wird die Stromversorgung der Festplatte automatisch abgeschaltet.
Zusätzlich verfügt jeder Kanal über eine Rückkopplungsschaltung mit spezieller Verwaltungssoftware, die die Versorgungsspannungswerte steuert und den Benutzer über Probleme mit der Speiseschaltung informiert.
</pre>
        <div class="flex grid sm:grid-cols-2 text-sm md:text-xl grid-cols-1">
          <div class="overflow-hidden">
            <label class="">
              <img src="assets/pc3000udma.webp" alt="pc3000udma" />
              Bildquelle: https://www.acelaboratory.com/pc3000.udma.php
            </label>
          </div>
        </div>

        <div class="text-white text-sm md:text-xl py-8">
          Falls noch Fragen offen sind rufen Sie am besten unter 0841 12840705
          an oder schreiben eine Email an: info@jungbauerdatenrettung.de
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HddComponent {
  constructor(public scrollService: ScrollService) {}
}
