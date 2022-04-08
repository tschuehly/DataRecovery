import { Component } from '@angular/core';
import SwiperCore, { A11y, Autoplay, EffectCube, EffectFlip, Navigation, Pagination, Thumbs, Virtual } from 'swiper';

SwiperCore.use([Virtual, Navigation, A11y, Pagination, EffectFlip, EffectCube, Autoplay]);

@Component({
  selector: 'app-slide-show',
  template: `
    <div class="bg-gray-main bg-circuit-board py-6 md:p-10 flex flex-row justify-between max-h-[40rem]">
        <button class="w-10 shrink-0" (click)="previousPicture()">
          <img src="/assets/arrow-left.svg" >
        </button>
      <div class="flex object-cover justify-center grow max-w-[80%]">
        <img [src]='"/assets/header_main/header_("+ currentImageIndex +").webp"'>
      </div>
        <button class="w-10 shrink-0" (click)="nextPicture()">
          <img src="/assets/arrow-right.svg" >
        </button>
    </div>

  `
  ,
  styles: [
    `
    `
  ]
})
export class SlideShowComponent {
  currentImageIndex = 1
  constructor() {
  }

  nextPicture(): void {
    if (this.currentImageIndex == 8) {
      this.currentImageIndex = 1
    } else {
      this.currentImageIndex = this.currentImageIndex + 1
    }
  }

  previousPicture(): void {
    if (this.currentImageIndex == 1) {
      this.currentImageIndex = 8
    } else {
      this.currentImageIndex = this.currentImageIndex - 1
    }

  }



}
