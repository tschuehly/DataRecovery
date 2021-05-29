import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/model';
import {Router} from '@angular/router';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="flex flex-col h-screen">
    <nav class="flex fixed justify-between p-4 w-full text-blue-900 bg-blue-50 shadow z-50">
      <div class="px-2 text-2xl font-bold">Cassandra Schilling<br>Datenrettungsdienst</div>
      <div class="flex items-center text-xl font-semibold">
        <a class="mr-2" routerLink="">Startseite</a>
        <a class="mr-2 ml-2 cursor-pointer" routerLink="preise">Preise</a>
        <a class="mr-2 ml-2" routerLink="/tracking">Auftragsstatus</a>
        <div (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'" [excludeBeforeClick]="true">
          <a class="mr-2 ml-2 cursor-pointer" (click)="dropdownShow = !dropdownShow">Arbeitsweise</a>
      <nav class="flex fixed justify-between w-full text-silver bg-gray-main">
        <a class="pl-2" href="">
          <div class="bg-gray-main p-4 ">
            <img src="/assets/LOGO_TJ_Datenrettung.svg" class="h-14">
          </div>
        </a>
        <div class="hidden md:flex flex items-center text-xl pr-4">
          <a class="mr-2 cursor-pointer" (click)="scrollToOrder()">Auftrag</a>
          <a class="mr-2 ml-2 cursor-pointer" routerLink="preise">Preise</a>
          <div class="h-full text-center flex" (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'"
               [excludeBeforeClick]="true" [ngClass]="{'bg-black': dropdownShow}">
            <a class="mr-2 ml-2 cursor-pointer self-center" (click)="dropdownShow = !dropdownShow">Arbeitsweise</a>


            <div class="grid gap-2 absolute  justify-evenly p-3 bg-gray-300 text-xl dropdown text-black"
                 style="margin-right: 2.8rem; margin-top: 5.5rem;" *ngIf="dropdownShow">
              <a routerLink="/datenrettung/hdd">HDD Festplatten</a>
              <a routerLink="/datenrettung/ssd">SSD Festplatten</a>
              <a routerLink="/datenrettung/flash">USB Stick<br>SD Karte</a>
              <a routerLink="/datenrettung/raid">RAID<br>Fusion Drive</a>
            </div>
          </div>
          <a class="mr-2 ml-2 cursor-pointer" (click)="scrollToContact()">Kontakt</a>
          <div *ngIf="currentUser">
            <a class="mr-2 ml-2" routerLink="/order">Bestellungen</a>
            <a class="mr-2 ml-2" routerLink="/product">Produkte</a>
            <a class="mr-2 ml-2" routerLink="/category">Kategorien</a>
          </div>
        </div>
      </nav>

    <div class="flex-grow pt-24 bg-blue-100 text-gray-700">

        <router-outlet></router-outlet>
    </div>
    <footer class="text-gray-700 bg-blue-50 pt-10" id="contact">
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
          <div class=" border-b py-4">
            <a routerLink="impressum" class="pr-4">Impressum & Datenschutz</a>|<a class="px-4" routerLink="agb">AGB</a>
          </div>
          <div class="col-span-2 mt-4">
            Made with 💗 by <a class="font-bold" href="https://www.linkedin.com/in/tschuehly/">Thomas Schühly</a>
          </div>
          <div>
            <a class="mr-2 ml-2" routerLink="/login" *ngIf="currentUser" (click)="logout.emit()">Logout</a>
          </div>
        </div>
      </footer>
    </div>`
})
export class NavigationComponent implements OnInit {
  @Input() currentUser: User;
  @Output() logout: EventEmitter<null> = new EventEmitter();
  public innerWidth: any;
  dropdownShow = false;

  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    router.events.subscribe(value => {
      this.dropdownShow = false;
    });
  }

  ngOnInit(): void {
    this.innerWidth = document.documentElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = document.documentElement.clientWidth;
  }

  scrollToOrder(): void {
    this.router.navigate(['']).then(_ => {
      setTimeout(function () {
        let orderForm = this.document.getElementById('order_form')
        orderForm.scrollIntoView({
          behavior: "smooth",
          block: "center"
        })
      }, 200)
    });
  }

  scrollToContact(): void {
    setTimeout(function () {
      let contact = this.document.getElementById('contact')
      contact.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }, 200)
  }
}
