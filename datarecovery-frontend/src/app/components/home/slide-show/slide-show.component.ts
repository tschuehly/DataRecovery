import { Component } from '@angular/core';
@Component({
  selector: 'app-slide-show',
  template: `
    <div
      class="bg-gray-main bg-circuit-board py-10 md:p-8 flex max-h-[40rem]"
    >
      <button class="w-7 md:w-12 shrink-0" (click)="previousPicture()">
        <img src="/assets/arrow-left.svg" />
      </button>
      <div class="flex grow justify-center">
        <img
          class="flex-1 md:flex-none"
          [src]="'/assets/header_main/header_(' + currentImageIndex + ').webp'"
          [srcset]="headerImage()"
          sizes="50vw"
        />
      </div>
      <button class="w-7 md:w-12 shrink-0" (click)="nextPicture()">
        <img src="/assets/arrow-right.svg" />
      </button>
    </div>
  `,
  styles: [``],
})
export class SlideShowComponent {
  currentImageIndex = 1;
  constructor() {}

  nextPicture(): void {
    if (this.currentImageIndex == 8) {
      this.currentImageIndex = 1;
    } else {
      this.currentImageIndex = this.currentImageIndex + 1;
    }
  }

  previousPicture(): void {
    if (this.currentImageIndex == 1) {
      this.currentImageIndex = 8;
    } else {
      this.currentImageIndex = this.currentImageIndex - 1;
    }
  }
  headerImage(): string {
    return (
      '/assets/header_main/header_(' +
      this.currentImageIndex +
      ')_small.webp 480w, /assets/header_main/header_(' +
      this.currentImageIndex +
      ').webp 1080w'
    );
  }
}
