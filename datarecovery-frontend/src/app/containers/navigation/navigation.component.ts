import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/model';
import {Router} from '@angular/router';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="flex flex-col h-screen">
    <nav class="flex fixed justify-between p-4 w-screen text-blue-900 bg-blue-50 shadow z-50">
      <div class="px-2 text-2xl font-bold">Cassandra Schilling<br>Datenrettungsdienst</div>
      <div class="flex items-center text-xl font-semibold">
        <a class="mr-2" routerLink="">Startseite</a>
        <a class="mr-2 ml-2 cursor-pointer"  (click)="scrollToPrice()">Preise</a>
        <a class="mr-2 ml-2" routerLink="/tracking">Auftragsstatus</a>
        <div (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'" [excludeBeforeClick]="true">
          <a class="mr-2 ml-2 cursor-pointer" (click)="dropdownShow = !dropdownShow">Arbeitsweise</a>

          <div class="flex absolute left-0 justify-evenly p-3 mt-7 w-full text-xl bg-gray-100 dropdown" *ngIf="dropdownShow" >
            <a routerLink="/datenrettung/hdd">HDD Festplatten</a>
            <a routerLink="/datenrettung/ssd">SSD Festplatten</a>
            <a routerLink="/datenrettung/flash">USB Stick/SD Karte</a>
            <a routerLink="/datenrettung/raid">RAID</a>
          </div>
        </div>
        <div *ngIf="currentUser">
          <a class="mr-2 ml-2"  routerLink="/order">Bestellungen</a>
          <a class="mr-2 ml-2"  routerLink="/product">Produkte</a>
          <a class="mr-2 ml-2"  routerLink="/category">Kategorien</a>
        </div>
      </div>
    </nav>

    <div class="flex-grow pt-24 bg-blue-100 text-gray-700">

        <router-outlet></router-outlet>
    </div>
    <footer class="text-gray-700 bg-blue-50 pt-10">
      <div class="container mb-4 text-center">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="mb-2 text-4xl">Kontakt</h1>
            <p>
              Cassandra Schilling<br/>
              Datenrettungsdienst<br/>
              Email: cassandra@datenrettung-schilling.de<br/>
              Tel.: +49 152 21408008
            </p>
          </div>
          <div>
            <h1 class="mb-2 text-4xl">Standort</h1>
            <p>

              Friedrich-Ebert-Straße 70<br/>
              71638 Ludwigsburg<br/>
              Deutschland<br/>
            </p>
          </div>
          <div class="col-span-2 mt-4">
            Made with 💗 by <a class="font-bold" href="https://www.linkedin.com/in/tschuehly/">Thomas Schühly</a>
          </div>
          <div>

            <a class="mr-2 ml-2"  routerLink="/login" *ngIf="!currentUser">Login</a>
            <a class="mr-2 ml-2"  routerLink="/login" *ngIf="currentUser"  (click)="logout.emit()">Logout</a>
          </div>
        </div>
      </div>
    </footer>
    </div>`
})
export class NavigationComponent implements OnInit {
  @Input() currentUser: User;
  @Output() logout: EventEmitter<null> = new EventEmitter();
  dropdownShow = false;
  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    router.events.subscribe(value => {
      this.dropdownShow = false;
    });
  }

  ngOnInit(): void {

  }

  scrollToPrice(): void {
    this.router.navigate(['']).then(_ => {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#priceList',
      });
    });
  }
}
