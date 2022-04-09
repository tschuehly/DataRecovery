import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ReviewDTO } from "../../dto/dto";
import SwiperCore, { A11y, EffectCube, EffectFlip, Navigation, Pagination, SwiperOptions, Virtual } from 'swiper';
import { ReviewDetailDTO } from '../../model/model';

SwiperCore.use([Virtual, Navigation, A11y, Pagination, EffectFlip, EffectCube]);

@Component({
  selector: 'app-review-component',
  template: `
    <div class="text-white button">
      <div class="flex justify-center  pt-8 text-center text-black">
        <div>
          <h3 class="text-3xl md:text-4xl font-semibold mb-4 ">Bewertungen aus Google</h3>

          <div class="flex justify-center  text-xl md:text-2xl pt-4 items-center">
            <svg class=" text-yellow-400 mx-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class=" text-yellow-400 mx-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class=" text-yellow-400 mx-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class=" text-yellow-400 mx-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <svg class=" text-yellow-400 mx-1 w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>

          </div>
          <span class="flex justify-center text-xl md:text-2xl ml-4">
          Ø {{this.reviewDetail?.rating | number: '1.1' }} bei {{this.reviewDetail?.userRatingsCount}} Bewertungen
       </span>
        </div>
      </div>
      <div class="px-0 md:container  text-lg md:text-xl py-4">
        <swiper class="my-4"
                [config]="config">
          <ng-template swiperSlide *ngFor="let currentReview of reviews">
            <div class="rounded-xl bg-gray-main p-6 md:w-4/5 mx-6 md:mx-auto mb-12">
              <div class="flex items-start justify-center">
                <div class="hidden md:flex bg-contain bg-center bg-no-repeat w-36 h-44 mr-4"
                     [ngStyle]="{'background-image': 'url('+this.currentReview.profile_photo_url+')'}">
                </div>
                <div>
                  <div class="flex flex-wrap sm:space-x-4 items-center flex-col space-y-2 sm:flex-row justify-center sm:justify-start">
                    <a href="{{currentReview.author_url}}" target="_blank"
                       class="font-bold text-lg underline">{{currentReview.author_name}}
                    </a>
                    <span class="inline-flex align-text-top">
              <svg [ngClass]="currentReview.rating >  0 ? 'text-yellow-400':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  1 ? 'text-yellow-400':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  2 ? 'text-yellow-400':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  3 ? 'text-yellow-400':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  4 ? 'text-yellow-400':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            </span>
                    <span class="text-gray-300 text-sm">{{currentReview.relative_time_description}}</span>

                  </div>
                  <div class="mt-3">
                    <p class=" mt-1 max-w-xl pb-4  text-lg md:text-xl text-gray-300">
                      {{showReview ? currentReview.text : (currentReview.text | First40Words) }}
                    </p>
                  </div>
                  <div class="flex justify-between text-lg md:text-xl space-x-2">
                    <button class="border border-gray-300  text-lg md:text-xl p-2 rounded">
                      <a class="md:hidden"
                      href="https://search.google.com/local/reviews?placeid=ChIJU5PnJJcznEcRy2VAwpDd1Dc&q=Tobias+Jungbauer+Datenrettung+-+AmmerseeDatenrettung.de&hl=de&gl=DE">
                        Alle Bewertungen einsehen
                      </a>
                      <a class="hidden md:block"
                        href="https://search.google.com/local/reviews?placeid=ChIJU5PnJJcznEcRy2VAwpDd1Dc&q=Tobias+Jungbauer+Datenrettung+-+AmmerseeDatenrettung.de&hl=de&gl=DE"
                        rel="noopener">
                        Alle Bewertungen einsehen
                      </a>
                    </button>
                    <button class="text-lg md:text-xl"> *ngIf="currentReview.text.split(' ').length > 40" (click)="showReview = !showReview">vollständige
                      Rezension lesen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ng-template>


        </swiper>
      </div>
    </div>


  `
})
export class ReviewComponentComponent implements OnInit {
  config: SwiperOptions = {
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 50,
    virtual: true,
    pagination: { dynamicBullets: true, dynamicMainBullets: 1 },
    navigation: {}
  };
  showReview = false;
  reviews: ReviewDTO[];
  reviewDetail: ReviewDetailDTO;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/review').subscribe((reviews: ReviewDTO[]) => {
      this.reviews = reviews.sort((r1, r2) => r2.time - r1.time)
    })
    this.http.get('/api/review/detail').subscribe((detail: ReviewDetailDTO) => {
      this.reviewDetail = detail;
    }
    )
  }

}
