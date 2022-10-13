import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sd',
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
        (micro) SD-Karte Datenrettung
      </h1>
    </div>
    <div class="bg-gray-main text-white border-b-2 border-silver pb-8">
      <div class="container py-8 px-3">
      <span class=" text-xl md:text-2xl font-bold py-6"
      >Datenrettung für (micro) SD-Karten</span>
        <pre
          class="whitespace-pre-wrap py-2"
        ><span class="text-bold text-sm md:text-lg text-silver">Updated am 03.12.2021, 17:59 von Tobias Jungbauer</span></pre>
        <pre class="whitespace-pre-wrap text-sm md:text-xl py-8 py-8">
<span class="font-semibold text-base md:text-xl">Datenrettung für (micro) SD-Karten:</span>
- die z.B. überhaupt nicht mehr erkannt werden
- oder sich anderweitig nicht auslesen lassen
- bei denen Windows Sie beim Anstecken auffordert zu formatieren
- oder die über ein Android Smartphone oder Sony Kamera formatiert worden sind

Für Fragen können Sie gerne unter 084112840705 (Mo.-Sa. 10.00-20.00 Uhr) anrufen. <div class="flex pt-4"><button class="text-base md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">Preisliste</a></button></div>

<span class="font-semibold text-base md:text-xl">Vorgehensweise:</span>

<div class="flex grid-cols-2 flex-wrap gap-4">
<img class="h-96 object-cover" src="assets/mSD-Bild.png">
<img class="h-96 object-cover" src="assets/flash_arbeitsweise2.png.jpg">
</div>
Bei Speichern mit PCB kann hier der NAND-Chip einfach heruntergenommen und ausgelesen werden.

Bei Monolithspeicher (z.B. micro SD-Karten) setzt man stattdessen auf der Oberfläche auf der eigenen Oberfläche an und liest über die eigenen Leiterbahnen des Speichers den internen NAND-Chip aus.

<div class="flex grid-cols-2 flex-wrap gap-4">
  <img class="h-96 object-cover" src="assets/header_main/header_(5).webp">
  <img class="h-96 object-cover" src="assets/header_main/header_(2).webp">
</div>
<pre class="whitespace-pre-wrap text-sm md:text-xl py-8">

Sobald die Chipdaten ausgelesen sind werden daraus mit Hilfe der Speicherungslogik des ehemaligen Controllers die Dateien virtuell wieder zusammengesetzt.

Nach einigen Anpassungen wird am Ende ein Image erzeugt, sodass Ihre Dateien bestenfalls vollständig und in ursprünglicher Ordnerstruktur rekonstruiert worden sind.

<div class="flex grid-cols-2 flex-wrap gap-4">
  <img class="h-96 object-cover" src="assets/Sandisk_1.png">
  <img class="h-96 object-cover" src="assets/sandisk_2.png">
</div>

Folgende Chips werden zum Auslesen unterstützt: TSOP-48, BGA-152 und LGA/TLGA-52/60, welche die üblichen Formate für beispielsweise USB-Sticks oder SD-Karten darstellen, wie weitere 112 verschiedene Monolitharten.

Festpreise nach Gesamtkapazität und nur nach Erfolg:
Defekte (micro) SD-Karte oder USB-Stick bis 32GB Datenträgerkapazität: 99,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 64GB Datenträgerkapazität: 149,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 128GB Datenträgerkapazität: 249,00 €*
Defekte (micro) SD-Karte oder USB-Stick bis 256GB Datenträgerkapazität: 449,00 €*
*bereits inkl. 19% Mehrwertsteuer

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
  styles: [
  ]
})
export class SdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}