import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-imprint',
  template: `
    <div class="container sm:px-10 my-10">
      <h1 class="text-3xl font-bold">Impressum</h1>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Angaben gemäß § 5 TMG</h2>
      <p>Cassandra Schilling<br />
        Datenrettungsdienst<br />
        Friedrich-Ebert-Straße 70<br />
        71638 Ludwigsburg</p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Kontakt</h2>
      <p>Telefon: 0152 21408008<br />
        E-Mail: info@datenrettung-schilling.de</p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Redaktionell verantwortlich</h2>
      <p>Cassandra Schilling</p>
      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Steuernummer</h2>
      <p>7122357209</p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">EU-Streitschlichtung</h2>
      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
      <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
    </div>
  `,
  styles: []
})
export class ImprintComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
