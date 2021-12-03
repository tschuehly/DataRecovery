import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  template: `

    <div class="bg-center bg-grey-main bg-cover bg-no-repeat "
         style="background-image: url('/assets/prices_header.jpg')">
      <div class="flex md:ml-80 justify-center md:justify-start ">
        <h1 class="text-4xl leading-relaxed text-center text-silver text-shadow bg-grey-main p-16">
          Tobias<br>Jungbauer<br>Datenrettung
        </h1>
      </div>
    </div>
    <ng-container *ngIf="!articleUrl">
      <div>
        <div class="h-20 bg-white text-center">
          <h1 class="text-4xl text-black py-5 tracking-wider">Blogübersicht</h1>
        </div>
        <div class="bg-grey-main bg-circuit-board">
          <div class="bg-white max-w-4xl mx-auto border-b-2 border-grey-main">
            <div class="text-grey-main py-8 flex flex-row justify-around">
              <img class="h-40 " src="/assets/android-icon-192x192.png">
              <div>
                <span>Updated am 29.11.2021, 16:14 von Tobias Jungbauer</span>
                <div class="space-y-4">
                  <a href="/blog/wie-teuer-ist-die-datenrettung">
                    <h3 class="text-2xl font-bold">Datenrettung Kosten</h3>
                  </a>
                  <p>
                    Wie kommen die Preise zustande? Details zu Kosten aus...
                  </p>
                  <button class="font-semibold">
                    Mehr lesen  →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Artikeleintrag Anfang -->
          <div class="bg-white max-w-4xl mx-auto border-b-2 border-grey-main">
            <div class="text-grey-main py-8 flex flex-row justify-around">
              <img class="h-40 " src="/assets/android-icon-192x192.png">
              <div>
                <span>Updated am 03.12.2021, 12:31 von Tobias Jungbauer</span>
                <div class="space-y-4">
                  <a href="/blog/apple-fusion-drive-datenrettung">
                    <h3 class="text-2xl font-bold">Apple Fusion Drive Datenrettung</h3>
                  </a>
                  <p>
                    Wie werden Daten von einem Apple Fusion Drive gerettet?...                                                       
                  </p>
                  <button class="font-semibold">
                    Mehr lesen  →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Artikeleintrag Ende -->

          <div class="bg-white max-w-4xl mx-auto border-b-2 border-grey-main">
            <div class="text-grey-main py-8 flex flex-row justify-around">
              <img class="h-40 " src="/assets/android-icon-192x192.png">
              <div>
                <span>Updated am 03.12.2021, 14:56 von Tobias Jungbauer</span>
                <div class="space-y-4">
                  <a href="/blog/ablauf-der-datenrettung-anhand-eines-beispiels">
                    <h3 class="text-2xl font-bold">Ablauf der Datenrettung</h3>
                  </a>
                  <p>
                    Wie läuft ein Auftrag bei Tobias Jungbauer Datenrettung ab?
                  </p>
                  <button class="font-semibold">
                    Mehr lesen  →
                  </button>
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
      if (this.articleUrl){
        this.http.get('/assets/articles/' + this.articleUrl + '.html',
          {
            headers: new HttpHeaders({'Content-Type': 'text/plain'}),
            responseType: 'text'
          })
          .subscribe(article => {
          this.article = this.sanitizer.bypassSecurityTrustHtml(article);
        });

      }
    });
  }

}
