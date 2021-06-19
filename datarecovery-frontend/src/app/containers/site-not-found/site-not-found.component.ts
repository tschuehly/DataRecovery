import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-not-found',
  template: `
    <div class="flex justify-center h-full">
      <div class="self-center items-center text-center">
        <h1 class="text-2xl">404 Diese Seite konnte nicht gefunden werden</h1>
        <button class="p-2 border rounded-md mt-4" routerLink="">Hier klicken um wieder zu Startseite zu gelangen</button>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class SiteNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
