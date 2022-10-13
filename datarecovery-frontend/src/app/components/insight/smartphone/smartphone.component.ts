import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  template: `
    <div
      class="py-10 bg-center bg-gray-main bg-cover bg-no-repeat"
      style="background-image: url('/assets/ssd_arbeitsweise.png')"
    >
      <div class="flex md:ml-32 py-10 justify-center md:justify-start">
        <h2
          class="text-2xl md:text-4xl leading-relaxed text-center text-silver text-shadow"
        >
          Tobias<br />Jungbauer<br />Datenrettung
        </h2>
      </div>
    </div>
    <div class="bg-white text-center">
      <h1 class="text-2xl md:text-4xl text-black py-5 tracking-wider">
        Smartphone Datenrettung
      </h1>
    </div>
    <div class="bg-gray-main text-white border-b-2 border-silver pb-8">
      <div class="container py-8 px-3">
      <span class=" text-xl md:text-2xl font-bold py-6"
      >Datenrettung für Smartphone</span>
        <pre
          class="whitespace-pre-wrap py-2"
        ><span class="text-bold text-sm md:text-lg text-silver">Updated am 13.10.2022, 22:29 von Tobias Jungbauer</span></pre>
        <pre class="whitespace-pre-wrap text-sm md:text-xl py-8 py-8">

Infos kommen bald!

Für Fragen können Sie gerne unter 084112840705 (Mo.-Sa. 10.00-20.00 Uhr) anrufen. <div class="flex pt-4"><button class="text-base md:text-xl bg-white py-2 px-4 shadow rounded text-black"><a href="preise">Preisliste</a></button></div>




  `,
  styles: [
  ]
})
export class SmartphoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
