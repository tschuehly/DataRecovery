import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="py-10 bg-right bg-gray-main bg-cover bg-no-repeat "
         style="background-image: url('/assets/hdd_arbeitsweise.png')">
      <div class="flex md:ml-32 py-10 justify-center md:justify-start">
        <div class="text-4xl leading-relaxed text-center text-silver text-shadow">
          Tobias<br>Jungbauer<br>Datenrettung
        </div>
      </div>
    </div>
    <article>

      <div class="h-20 bg-white text-center">
        <h1 class="text-4xl text-black py-5 tracking-wider">Philosophie</h1>
      </div>
      <div class="bg-gray-main text-silver border-b-2 border-silver pb-8">
        <div class="container">
          <h2 class="text-2xl text-white font-bold py-6">Die Vorteile meines Angebots sind:</h2>
          <pre class="whitespace-pre-wrap">
<span class="font-semibold ">1. Bei mir müssen Sie niemals in Vorkasse gehen:</span>
So bearbeite ich alle meine Fälle zu einem im Verhältnis zum Markt preiswerten Festpreis und das zudem nur nach Erfolg. Bei Misserfolg verlange ich keine Gebühren.

<span class="font-semibold">2. Meine Transparenz:</span>
Ich möchte Ihnen die höchstmögliche Transparenz zur geleisteten Arbeit und den dazugehörigen technischen Hintergrund geben.
Fragen Sie gerne nach, wie und mit welchem Werkzeug die Datenrettung durchgeführt worden ist.

<span class="font-semibold">3. Vielschichtiges Angebot:</span>
Ich bin mit meinem Know-how und meinem Equipment breit aufgestellt, so bearbeite ich nicht nur HDD und NAND Fälle, sondern biete auch SSD Datenrettung (SATA basiert) und zudem die RAID-Datenrettung an. 
          </pre>
          <h2 class="text-2xl text-white font-bold py-6">Der erste Auftrag:</h2>
          <pre class="whitespace-pre-wrap">
Bereits zu meiner Schulzeit, als auch begleitend während meines Elektrotechnikstudiums, arbeitete ich bei einem mittelständischen Elektronikdienstleister, bei dem ich das ESD-geschützte Arbeiten an elektronischen Baugruppen, z.B. Löten an SMD und THT Bauteilen lernen konnte, als auch für optische Systeme unter Reinraumbedingungen arbeiten durfte.

Meinen ersten Auftrag zu einer Datenrettung erhielt ich zu dieser Zeit.
Eine Festplatte aus dem Freundeskreis, bei der ein Angebot einer professionellen Datenrettung im vierstelligen Betrag vorlag und dies für den Besitzer nun mal viel zu teuer war.

Schon immer kannte ich mich gut mit Computern aus und half gerne Freunde und Verwandte, die damit Schwierigkeiten hatten. So kam diese Festplatte zu mir.
Damals mit noch nicht professionellen Mitteln, sondern mit einer simplen Linux Software war es tatsächlich möglich gewesen, die Daten vollständig zu lesen.

Darüber erschüttert, dass das Angebot für die Datenrettung dieser Festplatte im vierstelligen Bereich lag, fing ich an, meine Dienste günstig, bereits damals zu einem Festpreis nach Erfolg unter der Webseite ammerseedatenrettung.de anzubieten.
          </pre>
          <h2 class="text-2xl text-white font-bold py-6">Der Einstieg in die professionellen NAND-Datenrettung:</h2>
          <pre class="whitespace-pre-wrap">
Ich konnte mit meiner damaligen Methodik bereits einige Kunden glücklich machen, doch nicht lange dauerte es, dass ich Aufträge erhielt, bei denen ich mit meinen damals nicht professionellen Mitteln keine Lösung erzielen konnte, aber der festen Überzeugung war, dass man hier noch etwas aus technischer Sicht tun können muss.
Mit der Situation unzufrieden fing ich an zu recherchieren und nahm mein komplettes von Studentenjobs erspartes Geld in die Hand, um mein erstes Produkt von ACE Lab zu erwerben. Den PC-3000 Flash.
Hiermit konnte ich nun NAND-Speicher bearbeiten, die vom Computer nicht mehr erkannt worden sind und somit mit reiner Software nicht lösbar waren! Ein großer Fortschritt.
          </pre>
          <h2 class="text-2xl text-white font-bold py-6">Der Einstieg in die professionellen HDD Datenrettung:</h2>
          <pre class="whitespace-pre-wrap">
Aufgrund der emotionalen Kritik eines Kunden, dass ich seinen Festplattenfall trotz keiner klackernden Geräusche mit meinen damaligen Mitteln nicht lösen konnte und auch wegen meines persönlichen Ehrgeizes, welcher mir nicht erlaubte, meiner Meinung nach technisch lösbare Fälle aufzugeben, entschied ich mich wenige Monate später diesmal meinen damaligen kompletten Besitz, zwei Motorräder, zu verkaufen, um mir entsprechendes Equipment anzuschaffen.
Dazugekommen sind eine Laminar Flowbox, die es mir fortan erlaubte, unter Reinraumbedingungen zu arbeiten, als auch das PC-3000 UDMA von ACE Lab, womit ich nun die technische Unterstützung auf Herstellerebene diverser Festplattenmodelle erhielt.
          </pre>
          <h2 class="text-2xl text-white font-bold py-6">Die Situation Heute:</h2>
          <pre class="whitespace-pre-wrap">
Mittlerweile habe ich weit über 500 Datenrettungsfälle bearbeitet. Mit diesen kamen immer neue Herausforderungen, die nach harter Arbeit neue Lösungen hervorbrachten.
Um die bestmögliche Erfolgsquote zu erreichen, habe ich auch weiterhin sehr viel Zeit und Geld investiert, sodass ich mittlerweile auch die schwierigsten Fälle, bei denen oftmals ein vorheriger Bearbeiter bereits aufgegeben hat, bearbeiten kann, um zumindest eine Teildatenrettung zu erzielen.
So arbeite ich mittlerweile auch mit Festplatten mit beschädigten Oberflächen oder repariere äußerst schwierige Festplattenmodelle wie z.B. aus der Seagate Rosewood Familie, die namhafte Anbieter nicht bearbeiten wollen.
Dabei habe ich meine Anfänge nicht vergessen.
Mein Ziel ist es jedem eine perfekte Datenrettung anbieten zu können, ohne „Mondpreise“ dafür zu verlangen, trotz hoher, zeitlicher als auch finanzieller Investitionen und das damit verbundene Risiko.
Denn das große Problem der Branche ist, dass zu viele Anbieter von Ihrem Marketing, der Dringlichkeit & Wichtigkeit der Daten und somit auch von der Angst des Kunden, aber nicht von der geleisteten Arbeit leben.

Ich hoffe, dass Sie mein Angebot als fair empfinden werden und ich Sie mit meiner Leistung überzeugen kann.
          </pre>


        </div>

      </div>
    </article>

  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
