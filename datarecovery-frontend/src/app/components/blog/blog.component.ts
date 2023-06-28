import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, Meta, SafeHtml, Title} from '@angular/platform-browser';
import {ScrollService} from "../../services/scroll.service";
import {ReviewDetailDTO} from "../../model/model";
import { Router } from '@angular/router';



@Component({
  selector: 'app-blog',
  template: `
  <title>Artikelübersicht</title>
  <div
      class="bg-center bg-gray-main bg-cover bg-no-repeat "
      style="background-image: url('/assets/prices_header.jpg')"
    >
      <div class="flex md:ml-80 justify-center md:justify-start ">
        <span
          class="text-2xl md:text-4xl  leading-relaxed text-center bg-gray-main p-7" >

          <h3
                class="font-semibold pt-4 md:mt-0 mb-2 text-2xl md:text-3xl text-center text-gray-50"
              >
                Kontakt
              </h3>
              <p
                class=" text-center text-lg md:text-xl text-white"
              >
                E-Mail:
                <a href="mailto:info@jungbauerdatenrettung.de"
                  >
                  <span class="text-white"
                    >info@jungbauerdatenrettung.de</span
                  ></a
                ><br />

                Telefon: <span class="text-white"><a href="tel:0841 12840705">0841 12840705</a></span><br />

                Mobil: <span class="text-white"><a href="tel:0151 61408355">0151 61408355</a></span>
              </p>
       
          </span>
      </div>
    </div>
    <ng-container *ngIf="!articleUrl">
    <div class="bg-white text-center">
    <h1 class="text-2xl md:text-4xl text-black py-5 tracking-wider">
      Datenrettung - Wie man verlorene Daten wiederherstellt

    </h1>
  </div>
  <div class="bg-gray-main text-white border-b-2 border-silver pb-8">
    <div class="container py-8 px-3">
      <span class=" text-xl md:text-2xl font-bold"
        >Ihr Ansprechpartner zur Datenrettung
        </span
      >
      <pre class="whitespace-pre-wrap py-2">
<span class="whitespace-pre-wrap py-2 text-bold text-sm md:text-lg text-silver">Updated am 28.06.23, 17:37 von Tobias Jungbauer</span> </pre>

<pre class="whitespace-pre-wrap text-sm md:text-xl py-8">
<h2 class="font-semibold underline text-base md:text-xl">Was ist Datenrettung?</h2>
Die Datenrettung ist der Prozess der Wiederherstellung verlorener oder beschädigter Daten von verschiedenen Speichermedien wie Festplatten, SSDs, USB-Sticks und Speicherkarten.

Sollte keine Sicherung bestehen ist die Datenrettung bei einem Ausfall die einzige Möglichkeit wieder an die verlorenen Dateien heranzukommen.

Innenleben einer HDD-Festplatte:
<img class="h-80 object-cover" src="assets/hdd_arbeitsweise_headreplacement.jpg">
Wie die Arbeitsweise der HDD-Festplatten Datenrettung ist finden Sie hier: <div class="flex pt-4"><button class="text-base md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="https://www.jungbauerdatenrettung.de/datenrettung/hdd">Arbeitsweise HDD</a></button></div>

<h2 class="font-semibold underline text-base md:text-xl">Was tun bei Datenverlust?</h2>
Bitte handeln Sie im Falle eines Datenverlustes überlegt und rational. Emotionale Kurzschlussentscheidungen können sowohl Gefahr für die Daten selber bedeuten, als auch dafür sorgen, dass Sie den Speicher an einer unseriösen Firma "zur Analyse" einsenden werden, welche versuchen wird die Situation voll und ganz monetär auszunutzen.

Insbesondere in Deutschland ist die Situation der Seriosität der Anbieter schlecht. Es werden z.B. vermeitliche Analysen erstellt, ohne dass der Speicher sich überhaupt angesehen wird (HDD-Speicher ungeöffnet -> dennoch Oberflächenschäden festgestellt?).

Einzelne Firmen, welche sich als Marktführer präsentieren, haben trotz der unverschämt hohen Forderungssummen massive Qualitätsprobleme. HDD-Festplatten werden z.B. ohne Handschuhe und funktionierenden Reinraum geöffnet und fahrlässig beschädigt.

Achten Sie auf Kundenrezensionen und fragen Sie sich, wenn der Anbieter bereits im Marketing unseriös arbeitet (z.B. gibt sich als lokaler Anbieter aus), wie seriös dann die Datenrettung sein wird.


<h2 class="font-semibold underline text-base md:text-xl">Wie funktioniert die Datenrettung?</h2>
Die Datenrettung kann ich zwei Kategorien eingeteilt werden:

1. Der nicht-professionellen Datenrettungsbereich: in dieser wird mit Datenrettungssoftware wie z.B. R-Studio, EaseUS oder mit Linux gearbeitet. Der mechanische Zustand als auch der internen Firmware (Servicearea) der Festplatte bleibt unverändert.
Vorausgesetzt Ihr Speicher macht keine "seltsamen Geräusche" wie "klickende oder fiebsende" Töne können Sie diesen Schritt selber durchführen oder von einem Computergeschäft durchführen lassen.

Bitte denken Sie auch daran für den Fall einer SSD Datenrettung zuerst den TRIM-Befehl im Betriebssystem zu deaktivieren und allgemein keine Schreibvorgänge in der Userarea (auch kein CHKDSK!) durchzuführen.

2. Der professionelle Datenrettungsbereich: der entscheidende Unterschied ist, dass in der professionellen Datenrettung der Zustand des Speichers verbessert werden kann. Bei reinen Softwarelösungen sind Sie dem Ist-Zustand des Speichers ausgeliefert.
Bei HDD Speicher werden z.B. im Reinraum defekte Schreib-/Leseköpfe ausgetauscht und analysiert.

<div class="flex grid-cols-3 flex-wrap gap-4">
<img class="h-80 object-cover object-center" src="assets/HDDarbeitsweise_head.JPG">
<img class="h-80 object-cover object-right" src="assets/hdd_arbeitsweise_headreplacement.jpg">
</div> 
Ein unterschätzter zweiter Teil ist die Reparatur der Firmware (Servicearea).
Heutige Speicher haben immer mehr Daten auf weniger Raum - eine wachsende Datendichte. 
Diese Daten müssen um Langlebigkeit und Tempo gewähren zu können verwaltet werden.

Ohne eine funktionierende Servicearea (Firmware) erhalten wir auch keinen Zugriff auf die Userarea (Nutzerdaten).
<div class="flex grid-cols-3 flex-wrap gap-4">
<img class="h-80 object-cover object-left" src="assets/articles/sa-1.jpg">
<img class="h-80 object-cover object-left" src="assets/articles/sa-2.jpg">
</div>

<h2 class="font-semibold underline text-base md:text-xl">Wie hoch sind die Kosten für die professionelle Datenrettung?</h2>
Festpreise aufgeteilt in "<a routerLink="/datenrettung/standard-oder-komplexer-fall" class="underline">Standard-</a>" und "<a routerLink="/datenrettung/standard-oder-komplexer-fall" class="underline">komplexe</a>" Fälle.
Bezahlung nur nach Erfolg (95%+ oder Bestätigung nach Einsicht zur Übernahme des Ergebnisses).Alle Kosten wie z.B. auch Teilespender oder Leihdatenträger sind bereits im Festpreis inklusive.
Es handelt sich daher um Endpreise. Es kommen keine weitere Kosten zur Datenrettung hinzu!

Alle Festpreise finden Sie transparent im Voraus unter <a routerLink="/preise" class="underline">Preise</a>.

<h3 class="text-white text-sm md:text-xl py-8">
Falls Fragen bestehen rufen Sie am besten unter 0841 12840705 an oder schreiben eine Email an: info@jungbauerdatenrettung.de
</h3><div class="flex pt-4"><button
class="text-base md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a
href="">Zurück zur Startseite</a></button></div>
    
  
    
    <div (click)="handleClick($event)" [innerHTML]="article"></div>
  `,
  styles: [],
})
export class BlogComponent implements OnInit {
  article: SafeHtml;
  articleUrl: string;
  reviewDetail: ReviewDetailDTO;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private http: HttpClient,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    public scrollService: ScrollService
   
  ) {
  }

  private redirectTo404(): void {
    this.router.navigateByUrl('/404');
  }

  handleClick(event: any) {
    if (event.target.dataset.route == 'scrollToOrder') {
      this.scrollService.scrollToOrder()
    } else {
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.articleUrl = value.articleUrl;
      if (this.articleUrl) {
        this.http
          .get('api/article/' + this.articleUrl.toLowerCase(), {
            headers: new HttpHeaders({'Content-Type': 'text/plain'}),
            responseType: 'text',
          })
          .subscribe((article: string) => {

            if (!article) {
              this.redirectTo404();
              return;
            }

            const articleHtml = new DOMParser().parseFromString(article, 'text/html')
            const metaElements = articleHtml.querySelectorAll("meta")
            const title = articleHtml.querySelectorAll("title")[0]

            if (title != null) {
              this.titleService.setTitle(title.innerText)
            }
            metaElements.forEach((x: HTMLMetaElement) => {
              if (x.attributes.getNamedItem("property") != null) {
                const propertyName = x.attributes.getNamedItem("property").value
                this.metaService.removeTag("property='" + propertyName + "'")
                this.metaService.updateTag({property: propertyName, content: x.content})
              }
              if (x.name) {
                this.metaService.removeTag("name='" + x.name + "'")
                this.metaService.updateTag({name: x.name, content: x.content})
              }
            })
            this.article = this.sanitizer.bypassSecurityTrustHtml(article);
            this.http.get('/api/review/detail').subscribe((detail: ReviewDetailDTO) => {
              this.reviewDetail = detail;
              this.metaService.updateTag({property: 'ratingValue', content: this.reviewDetail.rating.toString()})
              this.metaService.updateTag({property: 'ratingCount', content: this.reviewDetail.userRatingsCount.toString()})
            });
          });



          
      }
    });

  }
}
