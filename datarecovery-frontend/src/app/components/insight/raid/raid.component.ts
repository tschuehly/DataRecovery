import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-raid',
  template: `
    <div
      class="py-10 bg-center bg-gray-main bg-cover bg-no-repeat"
      style="background-image: url('/assets/raid_arbeitsweise.png')"
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
        RAID Datenrettung (z.B. RAID 0, 1, 5 oder JBOD)
      </h1>
    </div>
    <div class="bg-gray-main border-b-2 border-silver">
      <div class="text-white container py-8 px-3">
        <span class="text-xl md:text-2xl font-bold"
          >RAID Datenrettung (z.B. RAID 0, 1, 5 oder JBOD):</span
        >
        <pre
          class="whitespace-pre-wrap py-2"
        ><span class="text-bold text-sm md:text-lg text-silver">Updated am 31.03.2022, 21:22 von Tobias Jungbauer</span></pre>
<pre class="whitespace-pre-wrap text-sm md:text-xl py-8"><span class="text-white">Gerne nehme ich auch Aufträge an, die von vorherigen Laboren aufgegeben oder die Datenrettung zu nur wesentlich höheren Preisen angeboten wurde. Ich stehe zu 100% hinter meinem Tun. Meine Mission ist es die professionelle Datenrettung für möglichst jeden zugänglich zu machen. Weiteres dazu und warum ich dafür Festpreise als die fairste und transparenteste Methode halte erfahren Sie <a href="/blog/datenrettung-kosten" class="underline font-bold">hier</a>.<div class="flex justify-end pt-4"><button class="text-lg md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">direkt zur Festpreisliste</a></button></div>  </span>
<span class="font-semibold text-base md:text-xl">Die angebotene RAID-Datenrettung richtet sich an Fälle:</span>
wenn ein "Rebuild" nicht möglich oder bereits gescheitert ist, z.B. wenn es sich um ein RAID 0 oder JBOD handelt, mehrere Volumes bei RAID 1 oder 5 beschädigt worden sind oder der RAID-Controller selbst defekt ist. Oftmals verursacht auch die Firmware der RAID Controller von Synology, QNAP und co. nach gescheiterten Rebuildversuch das ungewünschte Löschen des Dateisystems.

<span class="font-semibold text-base md:text-xl">Hier finden Sie Beispiele anhand bereits abgeschlossener Fälle:</span>
1. Synology RAID 1 (z.B. DS220+, DS220J, DS720+, DS218): <a href="/blog/synology-raid-1-datenrettung" class="underline font-bold">hier klicken</a>
2. QNAP RAID 1 (z.B. TR-002, TS-231K, TS-451D2-2G): <a href="/blog/qnap-raid-1-datenrettung" class="underline font-bold">hier klicken</a>
3. Sonnet Fusion RX1600Fibre Rackmount 32x 2TB HDD als RAID 5: <a href="/blog/sonnet-raid-5-datenrettung" class="underline font-bold">hier klicken</a>
4. HP SmartArray (z.B. P420, P411256, H221, H240, P441) 3x 4TB Custom RAID: <a href="/blog/HP-smartarray-datenrettung" class="underline font-bold">hier klicken</a>
5. Synology JBOD (z.B. DX517, DS1821+, DS920+, RS2421+, DS2422+, DS1520+): <a href="/blog/synology-jbod-datenrettung" class="underline font-bold">hier klicken</a>

<span class="font-semibold text-base md:text-xl">Vorgehensweise RAID-Datenrettung:</span>
Dafür werden nur einzelne Festplatten vor Ort benötigt, aber nicht mehr der RAID Controller.
Mit dieser Datenrettungsmethode werden Ihre Dateien, ohne Veränderung an den einzelnen Festplatten, virtuell zusammengesetzt.

<span class="font-semibold text-base md:text-xl">Besonderheit:</span> Auch wenn Sie Ihre Konfiguration wie RAID-Typ, Block Size, Parity Order oder Delay nicht wissen oder auch noch die Reihenfolge der Datenträger durcheinandergebracht haben können wir Ihre Dateien aus den einzelnen Festplatten inkl. Ordnerstruktur rekonstruieren!</pre>

        <div class="flex grid-cols-2 gap-4 h-80 mb-4">
          <img src="assets/raid1.jpg" />
        </div>
        <pre class="whitespace-pre-wrap text-sm md:text-xl py-8">
Unterstützt werden sowohl Software-RAID als auch Hardware-RAID, wie z.B. in NAS.
Auch Apple Fusion Drive wird unterstützt. Hier werden Ihre  Dateien auch bei Defekt des iMac oder der HDD-Festplatte wiederhergestellt.

Die unterstützten RAID Level sind:
- Einfache Level: 0 (Stripe), 1 (Mirror), JBOD, 1E Offset, 1E Adjacent, 4, 5, 5E, 5EE, 6, 6 Adaptec
- Kombinierte Level: 10, 50, 60, 51 usw.

<span class="font-semibold text-base md:text-xl">Mir ist Offenheit und Transparenz wichtig, daher finden Sie hier direkt die Preiskalkulation:</span>
50,00 € Grundpreis
50,00 € pro 1TB Nettokapazität
ggf. Reparaturkosten von einer HDD oder SSD

Preisbeispiele für RAID-Konfigurationen mit defekter HDD-Festplatte(n):
z.B. RAID: Raidlevel 1 mit 2x 2TB HDD (1x davon defekt): 150,00 EUR
z.B. RAID: Raidlevel 0 mit 2x 2TB HDD (1x davon defekt): 499,00 EUR
z.B. RAID: Raidlevel 5 mit 30x 2TB HDD (3x davon defekt): 2849,00 EUR
z.B. RAID: JBOD mit 4x 6TB HDD (1x davon defekt): 1499,00 EUR

Falls noch Fragen offen sind rufen Sie am besten unter 0841 12840705 an oder schreiben eine Email an: info@jungbauerdatenrettung.de
        </pre
        >
      </div>
    </div>
  `,
  styles: [],
})
export class RaidComponent {
  constructor(public scrollService: ScrollService) {}
}
