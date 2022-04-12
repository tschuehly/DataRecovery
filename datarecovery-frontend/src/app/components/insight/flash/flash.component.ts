import { Component } from '@angular/core';

@Component({
  selector: 'app-flash',
  template: `
  <div
    class="py-10 bg-center bg-gray-main bg-cover bg-no-repeat"
    style="background-image: url('/assets/ssd_arbeitsweise.png')"
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
      Datenrettung USB-Stick und (micro) SD-Karte
    </h1>
  </div>
  <div class="bg-gray-main text-white border-b-2 border-silver pb-8">
    <div class="container py-8">
      <span class="underline text-xl md:text-2xl font-bold py-6"
        >Datenrettung für USB-Stick und (micro) SD-Karte</span
      >
      <pre
        class="whitespace-pre-wrap py-2"
      ><span class="text-bold text-sm md:text-lg text-silver">Updated am 03.12.2021, 17:59 von Tobias Jungbauer</span></pre>
      <pre class="whitespace-pre-wrap text-sm md:text-xl py-8 py-8">
Gerne nehme ich auch Aufträge an, die von vorherigen Laboren aufgegeben oder die Datenrettung zu nur wesentlich höheren Preisen angeboten wurde. Ich stehe zu 100% hinter meinem Tun. Meine Mission ist es die professionelle Datenrettung für möglichst jeden zugänglich zu machen. Weiteres dazu und warum ich dafür Festpreise als die fairste und transparenteste Methode halte erfahren Sie <a href="/blog/datenrettung-kosten" class="underline font-bold">hier</a>.<div class="flex justify-end pt-4"><button class="text-lg md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">direkt zur Festpreisliste</a></button></div>

<span class="font-semibold text-base md:text-xl">Es wird die Datenrettung für USB-Sticks und (micro) SD-Karten angeboten:</span>
- die z.B. am Endgerät nicht mehr erkannt werden
- die z.B. Dateien anzeigen, aber sich nicht richtig auslesen lassen
- bei denen z.B. Windows Sie beim Anstecken auffordert zu formatieren
- die z.B. über z.B. Sony Kamera oder Android Smartphone formatiert worden sind

<span class="font-semibold text-base md:text-xl">Für die Datenrettung gibt es drei Ansätze:</span>
❶ Reparatur der Hardware und Reballing der Speicherchips (z.B. bei Wasserschaden)
❷ Auslesen mit reiner Software (für beschädigte Dateisysteme aber ohne Hardwarefehler)
❸ Das direkte Auslesen der internen NAND-Speicherbausteine des Datenträgers, sprich ohne Controller (für Hardwarefehler)

<div class="flex grid-cols-2 flex-wrap gap-4">
  <img class="h-96 object-cover" src="assets/flash_arbeitsweise2.png.jpg">
  <img class="h-96 object-cover" src="assets/IMG_20180914_170148.jpg">
</div>
<pre class="whitespace-pre-wrap text-sm md:text-xl py-8">
zu 3: Damit können die meisten Defekte umgangen werden und auch das Wiederherstellen nach Löschen/Formatieren über das Smartphone und Kamera (z.B. Sony) ermöglicht werden, bei der handelsübliche Software keine Ergebnisse liefern kann.

Bei Speichern mit PCB kann hier der NAND-Chip einfach heruntergenommen werden. Bei Monolithspeicher setzt man stattdessen auf der Oberfläche an einem sogenannten "technischen Pinout" an und liest über die eigenen Leiterbahnen des Speichers den internen NAND-Chip aus.

Sobald die Chipdaten ausgelesen sind werden daraus mit Hilfe der Speicherungslogik des ehemaligen Controllers die Dateien virtuell wieder zusammengesetzt.
Nach einigen Anpassungen wird am Ende ein Image erzeugt, sodass Ihre Dateien bestenfalls vollständig und in ursprünglicher Ordnerstruktur rekonstruiert worden sind.

Folgende Chips werden zum Auslesen unterstützt: TSOP-48, BGA-152 und LGA/TLGA-52/60, welche die üblichen Formate für beispielsweise USB-Sticks oder SD-Karten darstellen, wie weitere 112 verschiedene Monolitharten.

Festpreisliste nach von Ihnen definierten Erfolg:
Defekte (micro) SD-Karte oder USB-Stick bis 8GB Datenträgerkapazität: 50,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 16GB Datenträgerkapazität: 75,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 32GB Datenträgerkapazität: 100,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 64GB Datenträgerkapazität: 150,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 128GB Datenträgerkapazität: 250,00 €*
*bereits inkl. 19% Mehrwertsteuer
<div class="flex justify-end pt-4"><button class="text-lg md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">direkt zur Festpreisliste</a></button></div>
<h2 class="underline text-xl md:text-2xl font-bold my-6">Verwendete Hard- Und Software</h2><pre class="whitespace-pre-wrap py-8 text-sm md:text-xl overflow-hidden">Der PC-3000 Flash ist ein Hardware-Software-Lösung zur Wiederherstellung von Daten von NAND-basierten Geräten in solchen Fällen, in denen kein Zugriff über die zugewiesene Laufwerksschnittstelle mehr möglich ist.

Funktionsstörungen können vom PC-3000 Flash mit einer Reihe eigener Tools und Methoden umgangen werden.
        <img src="/assets/pc3000flash.webp">
Bildquelle: https://www.acelaboratory.com/pc3000flash.php

<h2 class="font-bold">Spiderboardadapter:</h2>
Der Spider Board Adapter wurde entwickelt, um mit Pins sich mit monolithischen Flash-Geräten zu verbinden.

<img src="/assets/pc3000flashspider.webp">
Bildquelle: https://www.acelaboratory.com/pc3000flash.php#Spider

Falls noch Fragen offen sind rufen Sie am besten unter 0841 12840705 an oder schreiben eine Email an: info@jungbauerdatenrettung.de
</pre>
</pre>
</pre>
    </div>
  </div>
`,
  styles: [],
})
export class FlashComponent {
  constructor() {}
}
