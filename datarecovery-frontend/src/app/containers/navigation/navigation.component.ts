import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="h-screen flex flex-col">
    <nav class="bg-white p-4 bg-gray-100 text-gray-800 w-screen flex justify-between fixed">
      <div class="text-3xl p-2">
        AmmerseeDatenrettung.de
      </div>
      <div class="text-xl flex  items-center">
        <a class="mr-2" routerLink="" routerLinkActive="active">Home</a>
        <a class="mr-2 ml-2" routerLink="/tracking" routerLinkActive="active">Tracking</a>
        <a class="mr-2 ml-2"  routerLink="/login" routerLinkActive="active">Arbeitsweise</a>
        <a class="mr-2 ml-2"  routerLink="/login" routerLinkActive="active">Kontakt</a>
      </div>
    </nav>
    <div class="pt-20 flex-grow">
        <router-outlet></router-outlet>
    </div>
    <footer>
      <div class="container mx-auto text-center mb-4">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="text-4xl mb-2">Kontakt</h1>
            <p>
              Tobias Jungbauer<br/>
              Datenrettungsdienst<br/>
              Email: ammersee.datenrettung@gmail.com<br/>
              Tel.: +49 15161408355
            </p>
          </div>
          <div>
            <h1 class="text-4xl mb-2">Standort</h1>
            <p>

              Egerstra&szlig;e 12<br/>
              86911 Die&szlig;en am Ammersee<br/>
              Deutschland<br/>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>`
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
