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

          <div
                class="font-semibold pt-4 md:mt-0 mb-2 text-2xl md:text-3xl text-center text-gray-50"
              >
                Kontakt
              </div>
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
      <div>
        <div class="bg-white text-center">
          <h1 class="text-2xl md:text-4xl  text-black py-5 tracking-wider">Artikelübersicht</h1>
        </div>

        <div class="bg-gray-main bg-circuit-board space-y-4 p-6">
        <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/philosophie"
                  href="/datenrettung/philosophie"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">
                    Philosophie
                  </h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 29.03.2022, 04:48 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Was sind meine Ziele für die angebotene Datenrettung? ...
                  </h3>
                  <a
                    href="/datenrettung/philosophie"
                    href="/datenrettung/philosophie"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <a
                href="/datenrettung/preise"
                href="/datenrettung/preise"
              >
                <div
                  class="h-40 flex-shrink-0 w-80  my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                  style="background-image: url('/assets/favicon/fav.PNG')"
                ></div>
              </a>

              <div class="flex-1">
                <a
                  href="/datenrettung/preise"
                  href="/datenrettung/preise"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">Datenrettung Kosten</h2>
                </a>
                <div class="py-2 text-sm md:text-lg italic">
                  Updated am 29.11.2021, 16:14 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie kommen die Preise zustande? Details zu Kosten aus...
                  </h3>
                  <a
                    href="/datenrettung/preise"
                    href="/datenrettung/preise"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Artikeleintrag Anfang -->
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/apple-fusion-drive-datenrettung"
                  href="/datenrettung/apple-fusion-drive-datenrettung"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">
                    Apple Fusion Drive Datenrettung
                  </h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 03.12.2021, 12:31 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...
                  </h3>
                  <a
                    href="/datenrettung/apple-fusion-drive-datenrettung"
                    href="/datenrettung/apple-fusion-drive-datenrettung"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Artikeleintrag Ende -->

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/ablauf-der-datenrettung-anhand-eines-beispiels"
                  href="/datenrettung/ablauf-der-datenrettung-anhand-eines-beispiels"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">Ablauf der Datenrettung</h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 03.12.2021, 14:56 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie läuft ein Auftrag bei Tobias Jungbauer Datenrettung ab?
                  </h3>
                  <a
                    href="/datenrettung/ablauf-der-datenrettung-anhand-eines-beispiels"
                    href="/datenrettung/ablauf-der-datenrettung-anhand-eines-beispiels"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/apple-ssd-datenrettung"
                  href="/datenrettung/apple-ssd-datenrettung"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">Apple SSD Datenrettung</h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 11.02.2022, 05:31 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple SSD-Speicher gerettet?
                  </h3>
                  <a
                    href="/datenrettung/apple-ssd-datenrettung"
                    href="/datenrettung/apple-ssd-datenrettung"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/pc-3000-flash"
                  href="/datenrettung/pc-3000-flash"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">PC-3000-Flash</h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 11.02.2022, 05:41 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">Wie funktioniert das PC-3000 Flash?</h3>
                  <a
                    href="/datenrettung/pc-3000-flash"
                    href="/datenrettung/pc-3000-flash"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/pc-3000-udma"
                  href="/datenrettung/pc-3000-udma"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">PC-3000 UDMA</h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 10.04.2022, 17:53 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">Wie funktioniert das PC-3000 UDMA?</h3>
                  <a
                    href="/datenrettung/pc-3000-udma"
                    href="/datenrettung/pc-3000-udma"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/gebrochene-micro-sd-karte"
                  href="/datenrettung/gebrochene-micro-sd-karte"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">
                    Datenrettung zerbrochene micro SD-Karte
                  </h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 11.02.2022, 06:12 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von gebrochenen micro SD-Karten gerettet?
                  </h3>
                  <a
                    href="/datenrettung/gebrochene-micro-sd-karte"
                    href="/datenrettung/gebrochene-micro-sd-karte"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/synology-raid-1-datenrettung"
                  href="/datenrettung/synology-raid-1-datenrettung"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">
                    Synology RAID 1 Datenrettung
                  </h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 28.03.2022, 16:51 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie funktioniert die Datenrettung bei RAID 1 und warum wird
                    Sie überhaupt benötigt?
                  </h3>
                  <a
                    href="/datenrettung/synology-raid-1-datenrettung"
                    href="/datenrettung/synology-raid-1-datenrettung"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/qnap-raid-1-datenrettung"
                  href="/datenrettung/qnap-raid-1-datenrettung"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">QNAP RAID 1 Datenrettung</h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 29.03.2022, 22:04 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie funktioniert die Datenrettung bei RAID 1 und warum wird
                    Sie überhaupt benötigt?
                  </h3>
                  <a
                    href="/datenrettung/qnap-raid-1-datenrettung"
                    href="/datenrettung/qnap-raid-1-datenrettung"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/externe-festplatte-wird-nicht-erkannt"
                  href="/datenrettung/externe-festplatte-wird-nicht-erkannt"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">Externe HDD wird nicht erkannt (z.B. WD Portable, Toshiba Canvio oder Seagate Expansion)</h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 30.04.2022, 07:23 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie funktioniert die Datenrettung bei externen Festplatten, die z.B. auch nicht mehr im BIOS erkannt werden?
                  </h3>
                  <a
                    href="/datenrettung/qnap-raid-1-datenrettung"
                    href="/datenrettung/qnap-raid-1-datenrettung"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div
              class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
            >
              <div
                class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                style="background-image: url('/assets/favicon/fav.PNG')"
              ></div>
              <div class="flex-1">
                <a
                  href="/datenrettung/sonnet-raid-5-datenrettung"
                  href="/datenrettung/sonnet-raid-5-datenrettung"
                  class="py-2"
                >
                  <h2 class="text-2xl font-bold">
                    Sonnet Fusion RX1600Fibre Rackmount RAID Datenrettung
                  </h2>
                </a>
                <div class="py-2 italic text-sm md:text-lg">
                  Updated am 02.04.2022, 05:04 von Tobias Jungbauer
                </div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie funktioniert die Datenrettung bei RAID 5 mit 30
                    Teilnehmern +?
                  </h3>
                  <a
                    href="/datenrettung/sonnet-raid-5-datenrettung"
                    href="/datenrettung/sonnet-raid-5-datenrettung"
                    class="font-semibold"
                  >
                    Mehr lesen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
          <div
            class="text-gray-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center"
          >
            <div
              class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
              style="background-image: url('/assets/favicon/fav.PNG')"
            ></div>
            <div class="flex-1">
              <a
                href="/datenrettung/datenrettung-hdd-bei-verkratzer-oberfläche"
                href="/datenrettung/datenrettung-hdd-bei-verkratzer-oberfläche"
                class="py-2"
              >
                <h2 class="text-2xl font-bold">Datenrettung 2.5“ WD-Festplatte bei verkratzter Oberfläche</h2>
              </a>
              <div class="py-2 italic text-sm md:text-lg">
                Updated am 30.04.2022, 23:31 von Tobias Jungbauer
              </div>
              <div class="space-y-4">
                <h3 class="pb-2">
                  Wie funktioniert die Datenrettung bei einer verkratzen HDD Festplatte? Ist es wirklich aussichtslos?
                </h3>
                <a
                  href="/datenrettung/datenrettung-hdd-bei-verkratzer-oberfläche"
                  href="/datenrettung/datenrettung-hdd-bei-verkratzer-oberfläche"
                  class="font-semibold"
                >
                  Mehr lesen →
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </ng-container>
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
