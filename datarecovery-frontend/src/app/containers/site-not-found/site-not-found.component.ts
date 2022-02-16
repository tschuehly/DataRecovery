import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-not-found',
  template: `
    <div class="flex justify-center h-full">
      <div class="self-center items-center text-center">
      <img class="h-80 object-cover object-right" src="assets/404.PNG">
        <h1 class="text-2xl">404 Diese Seite konnte nicht gefunden werden</h1>
        <button class="p-2 border rounded-md mt-4" routerLink="" href="">Zurück zur Startseite</button>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class SiteNotFoundComponent {

  constructor() { }


}
