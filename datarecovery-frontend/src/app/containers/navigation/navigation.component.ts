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
        <a routerLink="">
          <div class="px-2 text-2xl font-bold">Cassandra Schilling<br>Datenrettungsdienst</div>
        </a>

        <div class="hidden md:flex flex items-center text-xl pr-4 space-x-4">
          <a class="cursor-pointer" routerLink="">Startseite</a>
          <a class="cursor-pointer" (click)="scrollToOrder()">Auftrag</a>
          <a class="cursor-pointer" routerLink="preise">Preise</a>
          <div class="h-full text-center flex" (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'"
               [excludeBeforeClick]="true" [ngClass]="{'bg-black': dropdownShow}">
            <a class="cursor-pointer self-center" (click)="dropdownShow = !dropdownShow">Arbeitsweise</a>


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
    <div style="height: 300px">
      <iframe id="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.631212153642!2d9.203280792749238!3d48.89044172488516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d104bab8284b%3A0xfc656773e3df2e3c!2sDatenrettung%20Schilling!5e0!3m2!1sde!2sde!4v1621269476911!5m2!1sde!2sde"
              loading="lazy"
              width="{{innerWidth}}" height="300" frameborder="0" allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
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
          <div class="col-span-2 border-b py-4">
            <a routerLink="impressum" class="pr-4">Impressum & Datenschutz</a>|<a class="px-4" routerLink="agb">AGB</a>
          </div>
          <div class="col-span-2 mt-4">
            Made with 💗 by <a class="font-bold" href="https://www.linkedin.com/in/tschuehly/">Thomas Schühly</a>
          </div>
          <div>
            <a class="mr-2 ml-2" routerLink="/login" *ngIf="currentUser" (click)="logout.emit()">Logout</a>
          </div>
        </div>
    </div>

    </footer>
        </div>
  `
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
        let orderForm = document.getElementById('order_form')
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
