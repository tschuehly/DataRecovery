import {Component} from '@angular/core';
import SwiperCore, {A11y, Autoplay, EffectCube, EffectFlip, Navigation, Pagination, Virtual} from 'swiper';

SwiperCore.use([Virtual, Navigation, A11y, Pagination, EffectFlip, EffectCube, Autoplay]);

@Component({
  selector: 'app-slide-show',
  template: `
    <div class="bg-gray-main bg-circuit-board py-10">
      <h2 class="pb-8 text-3xl text-white text-center">Arbeitseinblick anhand von Fallbeispiele:</h2>
      <swiper
        [spaceBetween]="30"
        [effect]="'fade'"
        [navigation]="false"
        centeredSlides="true"
        [autoplay]="true">

        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-auto md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(1).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(2).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(3).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-top bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(4).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(5).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(6).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(7).jpg')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(8).jpg')">
          </div>
        </ng-template>
      </swiper>
    </div>

  `
  ,
  styles: [
    `
      @media (max-width: 600px) {
        .swiper_img {
          height: 20rem !important;
        }
      }

      .swiper_img {
        height: 40rem;
      }
    `
  ]
})
export class SlideShowComponent {
  constructor() {
  }

}
