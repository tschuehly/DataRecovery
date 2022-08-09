import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about',
  template: `
    <div
      class="p-10 bg-right bg-gray-main bg-cover bg-no-repeat "
      style="background-image: url('/assets/hdd_arbeitsweise.png')"
    >
      <div class="flex md:ml-32 py-10 justify-center md:justify-start">
        <div
          class="text-2xl md:text-4xl leading-relaxed text-center text-silver text-shadow"
        >
          Tobias<br />Jungbauer<br />Datenrettung
        </div>
      </div>
    </div>
    <article>
      <div class="bg-white text-center">
        <h1 class="text-2xl md:text-4xl text-black py-5 tracking-wider">
          Philosophie
        </h1>
      </div>
      <div class="bg-gray-main text-white border-b-2 border-silver pb-8">
        <div class="container py-10 px-3">
          <pre class="whitespace-pre-wrap">
<span class="underline text-xl md:text-2xl font-bold">Philosophie</span>
<span class="text-bold text-lg text-silver">Updated am 16.04.2022, 18:38 von Tobias Jungbauer</span>

Ziele: Transparenz, Fairness und Qualität während der Datenrettung. Daraus ergeben Sie u.a. folgende Punkte:

<span class="font-semibold ">1. Preise unabhängig der Wichtigkeit der Daten:</span>
Alle meine Fälle werden zu einem preiswerten Festpreis bearbeitet. Erfolgsversprechen: Bei Misserfolg entstehen keine Gebühren trotz Aufwand.

<span class="font-semibold">2. Meine Transparenz:</span>
Ich möchte die Transparenz zur geleisteten Arbeit und den dazugehörigen technischen Hintergrund geben. Fragen Sie gerne nach, wie und mit welchem Werkzeug die Datenrettung durchgeführt worden ist.

<span class="font-semibold">3. Vielschichtiges Angebot:</span>
Ich bin mit meinem Know-how und meinem Equipment breit aufgestellt und ausgezeichnet ausgestattet, so bearbeite ich nicht nur HDD und NAND Fälle, sondern biete auch SSD Datenrettung (SATA basiert) und zudem die RAID-Datenrettung an.

Meine Gründe und Motivation für die Preisgestaltung bzw. auch das Konzept dahinter erfahren Sie <a href="/blog/datenrettung-kosten" class="underline font-bold">hier</a>.
          </pre>
          <h2 class="text-xl underline text-white font-bold py-6">
          Über mich:
          </h2>
          <pre class="whitespace-pre-wrap">
<img class="h-80 object-cover object-right" src="assets/Profilbild_eckig.jpg">
Bereits zu meiner frühen Schulzeit, als auch begleitend während meines Ingenieurstudiums, arbeitete ich bei einem mittelständischen Elektronikdienstleister, bei dem ich das ESD-geschützte Arbeiten an elektronischen Baugruppen, z.B. Löten an SMD und THT Bauteilen lernen konnte, als auch für optische Systeme unter Reinraumbedingungen arbeiten durfte.

Meinen ersten Auftrag zu einer Datenrettung erhielt ich zu dieser Zeit.
Eine Festplatte aus dem Freundeskreis, bei der ein Angebot einer professionellen Datenrettung im vierstelligen Betrag vorlag und dies für den Besitzer nun mal viel zu teuer war.

Schon immer kannte ich mich gut mit Computern aus und half gerne Freunde und Verwandte, die damit Schwierigkeiten hatten. So kam diese Festplatte zu mir. Damals mit noch nicht professionellen Mitteln, sondern mit einer simplen Linux Software war es tatsächlich möglich gewesen, die Daten vollständig zu lesen.

Darüber erschüttert, dass das Angebot für die Datenrettung dieser Festplatte im vierstelligen Bereich lag, fing ich an, meine Dienste günstig, bereits damals zu einem Festpreis nach Erfolg unter der Webseite ammerseedatenrettung.de anzubieten.
          </pre
          >
          <h2 class="text-xl underline text-white font-bold py-6">
            Der Einstieg in die professionellen NAND-Datenrettung:
          </h2>
          <pre class="whitespace-pre-wrap">
Ich konnte mit meiner damaligen Methodik bereits einige Kunden glücklich machen, doch nicht lange dauerte es, dass ich Aufträge erhielt, bei denen ich mit meinen damals nicht professionellen Mitteln keine Lösung erzielen konnte, aber der festen Überzeugung war, dass man hier noch etwas aus technischer Sicht tun können muss.
Mit der Situation unzufrieden fing ich an zu recherchieren und nahm mein komplettes von Studentenjobs erspartes Geld in die Hand, um mein erstes Produkt von ACE Lab zu erwerben. Den PC-3000 Flash.
Hiermit konnte ich nun NAND-Speicher bearbeiten, die vom Computer nicht mehr erkannt worden sind und somit mit reiner Software nicht lösbar waren! Ein großer Fortschritt.
          </pre
          >
          <h2 class="text-xl underline text-white font-bold py-6">
            Der Einstieg in die professionellen HDD Datenrettung:
          </h2>
          <pre class="whitespace-pre-wrap">
Aufgrund der emotionalen Kritik eines Kunden, dass ich seinen Festplattenfall trotz keiner klackernden Geräusche mit meinen damaligen Mitteln nicht lösen konnte und auch wegen meines persönlichen Ehrgeizes, welcher mir nicht erlaubte, meiner Meinung nach technisch lösbare Fälle aufzugeben, entschied ich mich wenige Monate später diesmal meinen damaligen kompletten Besitz, zwei Motorräder, zu verkaufen, um mir entsprechendes Equipment anzuschaffen.
Dazugekommen sind eine Laminar Flowbox, die es mir fortan erlaubte, unter Reinraumbedingungen zu arbeiten, als auch das PC-3000 UDMA von ACE Lab, womit ich nun die technische Unterstützung auf Herstellerebene diverser Festplattenmodelle erhielt.
          </pre
          >
          <h2 class="text-xl underline text-white font-bold py-6">
            Die Situation Heute:
          </h2>
          <pre class="whitespace-pre-wrap">
Mittlerweile habe ich über 700 Datenrettungsfälle erfolgreich bearbeitet.
Mit diesen kamen immer neue Herausforderungen, die nach harter Arbeit neue Lösungen hervorbrachten.
Um die bestmögliche Erfolgsquote zu erreichen, habe ich auch weiterhin sehr viel Zeit und Geld investiert, sodass ich mittlerweile auch die schwierigsten Fälle, bei denen oftmals ein vorheriger Bearbeiter bereits aufgegeben hat, bearbeiten kann, um zumindest eine Teildatenrettung zu erzielen.
So arbeite ich mittlerweile auch mit Festplatten mit beschädigten Oberflächen oder repariere äußerst schwierige Festplattenmodelle wie z.B. aus der Seagate Rosewood Familie, die namhafte Anbieter nicht bearbeiten wollen.
Dabei habe ich meine Anfänge nicht vergessen.
Mein Ziel ist es jedem eine perfekte Datenrettung anbieten zu können, ohne „Mondpreise“ dafür zu verlangen, trotz hoher, zeitlicher als auch finanzieller Investitionen und das damit verbundene Risiko.
Denn das große Problem der Branche ist, dass zu viele Anbieter von Ihrem Marketing, der Dringlichkeit & Wichtigkeit der Daten und somit auch von der Angst des Kunden, aber nicht von der geleisteten Arbeit leben.

Ich hoffe, dass Sie mein Angebot als fair empfinden werden und ich Sie mit meiner Leistung überzeugen kann.
          </pre
          >
        </div>
      </div>
    </article>
  `,
  styles: [],
})
export class AboutComponent {
  constructor(public scrollService: ScrollService) {}
}
