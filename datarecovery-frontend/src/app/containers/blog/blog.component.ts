import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  template: `

    <div class="bg-center bg-gray-main bg-cover bg-no-repeat "
         style="background-image: url('/assets/prices_header.jpg')">
      <div class="flex md:ml-80 justify-center md:justify-start ">
        <h1 class="text-4xl leading-relaxed text-center text-silver text-shadow bg-gray-main p-16">
          Tobias<br>Jungbauer<br>Datenrettung
        </h1>
      </div>
    </div>
    <ng-container *ngIf="!articleUrl">
      <div>
        <div class="h-20 bg-white text-center">
          <h1 class="text-4xl text-black py-5 tracking-wider">Blogartikel</h1>
        </div>
        <div class="bg-gray-main ">
          <div class="container flex">

            <div class="text-silver py-8 mx-auto justify-center space-y-4">
              <div class="bg-silver text-black bg-circuit-board">
                <a href="/blog/was-kostet-datenrettung">
                  <h3>Was kostet Datenrettung</h3>
                </a>
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
