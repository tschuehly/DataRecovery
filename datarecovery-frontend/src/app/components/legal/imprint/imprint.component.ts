import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  template: `
    <div class="container sm:px-10 my-10">
      <h1 class="text-3xl font-bold">Impressum</h1>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">
        Angaben gemäß § 5 TMG
      </h2>
      <p>
        Tobias Jungbauer<br />
        Datenrettung<br />
        Am Stein, 9<br />
        85049 Ingolstadt
      </p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Kontakt</h2>
      <p>Telefon: 0841 12840705<br /></p>
      <p>
        Mobil: 0151 61408355<br />
        E-Mail: info@jungbauerdatenrettung.de
      </p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE318961162
      </p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">Steuernummer</h2>
      <p>124/233/70627</p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">
        Angaben zur Berufshaftpflichtversicherung
      </h2>
      <p>
        <strong>Name und Sitz des Versicherers:</strong><br />
        Hiscox<br />
        Arnulfstraße 31<br />
        80636 München
      </p>
      <p><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">
        Redaktionell verantwortlich
      </h2>
      <p>
        Tobias Jungbauer<br />
        Am Stein 9<br />
        85049 Ingolstadt<br />
      </p>

      <p>Telefon: 0841 12840705<br /></p>
      <p>
        Mobil: 0151 61408355<br />
        tobias@jungbauerdatenrettung.de
      </p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">
        EU-Streitschlichtung
      </h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          >https://ec.europa.eu/consumers/odr/</a
        >.<br />
        Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 class="text-lg font-semibold mb-2 mt-4 underline">
        Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  `,
  styles: [],
})
export class ImprintComponent implements OnInit {
  private site;
  constructor() {}

  ngOnInit(): void {}
}
