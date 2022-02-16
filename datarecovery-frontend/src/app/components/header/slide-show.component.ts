import { Component } from '@angular/core';
import SwiperCore, { A11y, Autoplay, EffectCube, EffectFlip, Navigation, Pagination, Virtual } from 'swiper';

SwiperCore.use([Virtual, Navigation, A11y, Pagination, EffectFlip, EffectCube, Autoplay]);

@Component({
  selector: 'app-slide-show',
  template: `
    <div class="bg-gray-main bg-circuit-board py-10">
      <swiper
        [spaceBetween]="30"
        [effect]="'fade'"
        [navigation]="true"
        centeredSlides="true"
        [autoplay]="{delay: 5000}"
        [speed]="600"

      >

        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(1).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(2).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(3).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-top bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(4).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(5).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(6).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(7).webp')">
          </div>
        </ng-template>
        <ng-template swiperSlide>
          <div class="swiper_img flex content-center bg-cover md:bg-contain bg-center bg-no-repeat"
               style="background-image: url('/assets/header_main/header_(8).webp')">
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
