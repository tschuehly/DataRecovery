import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReviewDTO} from '../../../dto/dto';
import {ReviewDetailDTO} from '../../../model/model';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-review',
  template: `
    <div class="text-white button my-8">
      <div class="flex justify-center text-center text-black">
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold ">
          <a class="underline" href="https://search.google.com/local/reviews?placeid=ChIJU5PnJJcznEcRy2VAwpDd1Dc&q=Tobias+Jungbauer+Datenrettung+-+AmmerseeDatenrettung.de&hl=de&gl=DE"
                >Google Bewertungen:</a>
          </h2>

          <div class="flex justify-center pt-2 items-center">
            <svg
              class=" text-yellow-400 mx-1 w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
            <svg
              class=" text-yellow-400 mx-1 w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
            <svg
              class=" text-yellow-400 mx-1 w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
            <svg
              class=" text-yellow-400 mx-1 w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
            <svg
              class=" text-yellow-400 mx-1 w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
              />
            </svg>
          </div>
          <div class="hidden" itemscope itemtype="https://schema.org/AggregateRating" >
            <div itemprop="itemReviewed" itemscope itemtype="https://schema.org/LocalBusiness">
              <span itemprop="name">Datenrettung Tobias Jungbauer</span>
            </div>
            <span itemprop="ratingValue">{{ this.reviewDetail?.rating | number: '1.1' }}</span> bei
            <span itemprop="ratingCount">{{ this.reviewDetail?.userRatingsCount }}</span> Bewertungen
          </div>
          <span class="flex justify-center text-lg md:text-xl ml-4 pt-2">
            Ø {{ this.reviewDetail?.rating | number: '1.1' }} bei
            {{ this.reviewDetail?.userRatingsCount }} Bewertungen
          </span>
        </div>
      </div>
      <div
        class="px-0 py-4 flex flex-col justify-evenly items-center md:flex-row gap-4"
      >
        <button
          class="hidden md:block w-7 h-7 md:w-12 md:h-12 shrink-0 bg-gray-main rounded-full ml-4"
          (click)="previousReview()"
        >
          <img src="/assets/arrow-left.svg" />
        </button>
        <div class="px-0 py-4 flex flex-col justify-evenly items-center md:flex-row gap-4" *ngIf="this.reviews != undefined">
          <div class="rounded-xl bg-gray-main p-6 mx-6 md:mx-0">
            <div class="flex items-center justify-center">
              <div
                class="hidden md:flex bg-contain bg-center bg-no-repeat w-36 h-44"
                [ngStyle]="{
                  'background-image':
                    'url(' +
                        this.reviews[this.reviewIndex].profile_photo_url +
                    ')'
                }"
              ></div>
              <div>
                <div
                  class="flex flex-wrap sm:space-x-4 items-center px-2 flex-col space-y-2 sm:flex-row justify-center sm:justify-start"
                >
                  <a
                    [attr.href]="this.reviews == undefined ? '' : this.reviews[this.reviewIndex].author_url"
                    target="_blank"
                    class="font-bold text-lg underline"
                    >{{ this.reviews[this.reviewIndex].author_name }}
                  </a>
                  <span class="inline-flex align-text-top">
                    <svg
                      [ngClass]="
                        this.reviews[this.reviewIndex].rating > 0
                          ? 'text-yellow-400'
                          : ' text-gray-400'
                      "
                      class="mx-1 w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    <svg
                      [ngClass]="
                        this.reviews[this.reviewIndex].rating > 1
                          ? 'text-yellow-400'
                          : ' text-gray-400'
                      "
                      class="mx-1 w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    <svg
                      [ngClass]="
                        this.reviews[this.reviewIndex].rating > 2
                          ? 'text-yellow-400'
                          : ' text-gray-400'
                      "
                      class="mx-1 w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    <svg
                      [ngClass]="
                        this.reviews[this.reviewIndex].rating > 3
                          ? 'text-yellow-400'
                          : ' text-gray-400'
                      "
                      class="mx-1 w-4 h-4 fill-current "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                    <svg
                      [ngClass]="
                        this.reviews[this.reviewIndex].rating > 4
                          ? 'text-yellow-400'
                          : ' text-gray-400'
                      "
                      class="mx-1 w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                  </span>
                  <span class="text-gray-300 text-sm">{{
                    this.reviews[this.reviewIndex].relative_time_description
                  }}</span>
                </div>
                <div class="mt-3">
                  <p
                    class=" mt-1 max-w-xl pb-4 px-2 text-base md:text-lg text-gray-300"
                  >
                    {{
                      showReview
                        ? this.reviews[this.reviewIndex].text
                        : (this.reviews[this.reviewIndex].text | First40Words)
                    }}
                  </p>
                </div>
                <div class="flex justify-between text-sm md:text-base px-2 py-2 space-x-2">
                  <a
                    class="border border-gray-300 text-sm md:text-lg p-2 rounded"
                    href="https://search.google.com/local/reviews?placeid=ChIJU5PnJJcznEcRy2VAwpDd1Dc&q=Tobias+Jungbauer+Datenrettung+-+AmmerseeDatenrettung.de&hl=de&gl=DE"
                  >
                    Alle Bewertungen einsehen
                  </a>
                  <button

                    *ngIf="
                      this.reviews[this.reviewIndex].text.split(' ').length > 40
                    "
                    (click)="showReview = !showReview"
                  >
                    ... vollständige Rezension lesen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-around w-full md:w-auto md:my-4">
          <button
            class="md:hidden block w-8 h-8 md:w-12 md:h-12 shrink-0 bg-gray-main rounded-full"
            (click)="previousReview()"
          >
            <img src="/assets/arrow-left.svg" alt="arrow left"/>
          </button>

          <button
            class="w-8 h-8 md:w-12 md:h-12 shrink-0 bg-gray-main rounded-full  mr-0"
            (click)="nextReview()"
          >
            <img src="/assets/arrow-right.svg" alt="arrow right" />
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ReviewComponent implements OnInit {
  showReview = false;
  reviews: ReviewDTO[];
  reviewDetail: ReviewDetailDTO;
  reviewIndex = 0;

  constructor(
    private http: HttpClient,
    private metaService: Meta
  ) {
  }

  ngOnInit(): void {
    this.http.get('/api/review').subscribe((reviews: ReviewDTO[]) => {
      this.reviews = reviews.sort((r1, r2) => r2.time - r1.time);
    });
    this.http.get('/api/review/detail').subscribe((detail: ReviewDetailDTO) => {
      this.reviewDetail = detail;
      this.metaService.removeTag("property='ratingValue'")
      this.metaService.updateTag({property: 'ratingValue', content: this.reviewDetail.rating.toString()})
      this.metaService.removeTag("property='ratingCount'")
      this.metaService.updateTag({property: 'ratingCount', content: this.reviewDetail.userRatingsCount.toString()})
    });

  }

  nextReview() {
    if (this.reviewIndex == this.reviews.length - 1) {
      this.reviewIndex = 0;
    } else {
      this.reviewIndex = this.reviewIndex + 1;
    }
  }

  previousReview() {
    if (this.reviewIndex == 0) {
      this.reviewIndex = this.reviews.length - 1;
    } else {
      this.reviewIndex = this.reviewIndex - 1;
    }
  }
}
