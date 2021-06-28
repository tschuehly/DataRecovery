import {Component, OnInit} from '@angular/core';
import SwiperCore, {A11y, Autoplay, EffectCube, EffectFlip, Navigation, Pagination, Virtual} from "swiper";

SwiperCore.use([Virtual, Navigation, A11y, Pagination, EffectFlip, EffectCube, Autoplay]);

@Component({
  selector: 'app-header',
  template: `
    <swiper  class="bg-gray-main"
      [spaceBetween]="30"
      [effect]="'fade'"
      [navigation]="false"
      centeredSlides="true"
      [autoplay]="true">

      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(8).jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(7).jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(6).jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-top bg-no-repeat"
             style="background-image: url('/assets/ssd_arbeitsweise.jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(9).jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(12).jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(15).jpg')">
        </div>
      </ng-template>
      <ng-template swiperSlide>
        <div class="swiper_img flex content-center bg-cover md:bg-auto bg-center bg-no-repeat"
             style="background-image: url('/assets/header_main/header_(14).jpg')">
        </div>
      </ng-template>
    </swiper>`,
  styles: [
    `
      @media (max-width: 600px) {
        .swiper_img {
          height: 20rem!important;
        }
      }
      .swiper_img {
        height: 30rem;
      }
`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
