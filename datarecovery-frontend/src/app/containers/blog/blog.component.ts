import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  template: `

    <div class="bg-center bg-grey-main bg-cover bg-no-repeat "
         style="background-image: url('/assets/prices_header.jpg')">
      <div class="flex md:ml-80 justify-center md:justify-start ">
        <span class="text-4xl leading-relaxed text-center text-silver text-shadow bg-grey-main p-16">
          Tobias<br>Jungbauer<br>Datenrettung
        </span>
      </div>
    </div>
    <ng-container *ngIf="!articleUrl">
      <div>
        <div class="h-20 bg-white text-center">
          <h1 class="text-4xl text-black py-5 tracking-wider">Blogübersicht</h1>
        </div>
        <div class="bg-grey-main bg-circuit-board space-y-4 p-6">
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0 w-80  my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/datenrettung-kosten" href="/blog/datenrettung-kosten" class="py-2">
                  <h2 class="text-2xl font-bold">Datenrettung Kosten</h2>
                </a>
                <div class="py-2 italic">Updated am 29.11.2021, 16:14 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie kommen die Preise zustande? Details zu Kosten aus...
                  </h3>
                  <a routerLink="/blog/datenrettung-kosten" href="/blog/datenrettung-kosten" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Artikeleintrag Anfang -->
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/apple-fusion-drive-datenrettung" href="/blog/apple-fusion-drive-datenrettung" class="py-2">
                  <h2 class="text-2xl font-bold">Apple Fusion Drive Datenrettung</h2>
                </a>
                <div class="py-2 italic">Updated am 03.12.2021, 12:31 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...
                  </h3>
                  <a routerLink="/blog/apple-fusion-drive-datenrettung" href="/blog/apple-fusion-drive-datenrettung" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>
          

          <!-- Artikeleintrag Ende -->

          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/ablauf-der-datenrettung-anhand-eines-beispiels" href="/blog/ablauf-der-datenrettung-anhand-eines-beispiels" class="py-2">
                  <h2 class="text-2xl font-bold">Ablauf der Datenrettung</h2>
                </a>
                <div class="py-2 italic">Updated am 03.12.2021, 14:56 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie läuft ein Auftrag bei Tobias Jungbauer Datenrettung ab?
                  </h3>
                  <a routerLink="/blog/ablauf-der-datenrettung-anhand-eines-beispiels" href="/blog/ablauf-der-datenrettung-anhand-eines-beispiels" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/apple-ssd-datenrettung" href="/blog/apple-ssd-datenrettung" class="py-2">
                  <h2 class="text-2xl font-bold">Apple SSD Datenrettung</h2>
                </a>
                <div class="py-2 italic">Updated am 03.12.2021, 12:31 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...
                  </h3>
                  <a routerLink="/blog/apple-ssd-datenrettung" href="/blog/apple-ssd-datenrettung" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/datenrettung-pc-3000-flash" href="/blog/datenrettung-pc-3000-flash" class="py-2">
                  <h2 class="text-2xl font-bold">datenrettung-pc-3000-flash</h2>
                </a>
                <div class="py-2 italic">Updated am 03.12.2021, 12:31 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...
                  </h3>
                  <a routerLink="/blog/datenrettung-pc-3000-flash" href="/blog/datenrettung-pc-3000-flash" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/datenrettung-pc-3000-udma" href="/blog/datenrettung-pc-3000-udma" class="py-2">
                  <h2 class="text-2xl font-bold">datenrettung-pc-3000-udma</h2>
                </a>
                <div class="py-2 italic">Updated am 03.12.2021, 12:31 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...
                  </h3>
                  <a routerLink="/blog/datenrettung-pc-3000-udma" href="/blog/datenrettung-pc-3000-udma" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div class="bg-white max-w-4xl mx-auto rounded-2xl">
            <div class="text-grey-main py-4 flex flex-col md:flex-row justify-around text-center md:text-left items-center">
              <div class="h-40 flex-shrink-0  w-80 my-4 bg-contain bg-center bg-no-repeat md:order-first mr-4"
                   style="background-image: url('/assets/android-icon-192x192.png')">
              </div>
              <div class="flex-1">
                <a routerLink="/blog/gebrochene-micro-sd-karte" href="/blog/gebrochene-micro-sd-karte" class="py-2">
                  <h2 class="text-2xl font-bold">gebrochene-micro-sd-karte</h2>
                </a>
                <div class="py-2 italic">Updated am 03.12.2021, 12:31 von Tobias Jungbauer</div>
                <div class="space-y-4">
                  <h3 class="pb-2">
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...
                  </h3>
                  <a routerLink="/blog/gebrochene-micro-sd-karte" href="/blog/gebrochene-micro-sd-karte" class="font-semibold">
                    Mehr lesen  →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </ng-container>
    <div [innerHTML]="article"></div>

  `,
  styles: []
})
export class BlogComponent implements OnInit {
  article: SafeHtml;
  articleUrl: string;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.articleUrl = value.articleUrl;
      if (this.articleUrl) {
        this.http.get('/assets/articles/' + this.articleUrl + '.html',
          {
            headers: new HttpHeaders({ 'Content-Type': 'text/plain' }),
            responseType: 'text'
          })
          .subscribe(article => {
            this.article = this.sanitizer.bypassSecurityTrustHtml(article);
          });

      }
    });
  }

}
