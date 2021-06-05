import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "../../model/model";
import SwiperCore, {A11y, EffectCube, EffectFlip, Navigation, Pagination, Virtual} from "swiper/core";

SwiperCore.use([Virtual, Navigation, A11y, Pagination, EffectFlip, EffectCube]);

@Component({
  selector: 'app-review-component',
  template: `
    <div class="bg-gray-main text-gray-300">
      <div class="px-0 md:container  py-4">
        <swiper class="my-4" [effect]="'slide'" [slidesPerView]="1"
                [spaceBetween]="50" [virtual]="true" [navigation]="true" [pagination]="true">
          <ng-template swiperSlide *ngFor="let currentReview of reviews">
            <div class="rounded-xl p-6 md:w-4/5 mx-6 md:mx-auto mb-12" style="box-shadow: 0 2px 25px 0 black">
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
              <svg [ngClass]="currentReview.rating >  0 ? 'text-yellow-500':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  1 ? 'text-yellow-500':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  2 ? 'text-yellow-500':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  3 ? 'text-yellow-500':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <svg [ngClass]="currentReview.rating >  4 ? 'text-yellow-500':' text-gray-400'"
                   class="mx-1 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
            </span>
                    <span class="text-gray-300 text-sm">{{currentReview.relative_time_description}}</span>

                  </div>
                  <div class="mt-3">
                    <p class=" mt-1 max-w-xl pb-4 text-gray-300">
                      {{showReview ? currentReview.text : (currentReview.text | First40Words) }}
                    </p>
                  </div>
                  <div class="flex justify-between space-x-2">
                    <button class="border border-gray-300 p-2 rounded">
                      <a
                        href="https://www.google.de/search?&q=Tobias+Jungbauer+Datenrettung&entrypoint=sh/x/kp/local#lrd=0x479c339724e79353:0x37d4dd90c24065cb,1"
                        rel="noopener">
                        Weitere Bewertungen
                      </a>
                    </button>
                    <button *ngIf="currentReview.text.split(' ').length > 40" (click)="showReview = !showReview">Ganze
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


  `,

  styles: [
    `.swiper-button-next {
      display: none;
    }`
  ]
})
export class ReviewComponentComponent implements OnInit {
  showReview = false;
  reviews: Review[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("/api/review").subscribe((reviews: Review[]) => {
      this.reviews = reviews
    })
  }

}
