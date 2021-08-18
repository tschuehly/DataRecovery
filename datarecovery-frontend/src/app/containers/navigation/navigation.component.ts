import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/model';
import {NavigationEnd, Router} from '@angular/router';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

declare let gtag: Function;
@Component({
  selector: 'app-navigation',
  template: `
    <div class="flex flex-col h-screen">
      <nav class="flex fixed justify-between p-4 w-full text-blue-900 bg-blue-50 shadow z-50">
        <a routerLink="">
          <div class="px-2 text-2xl font-bold">Datenrettung Schilling<br>Ludwigsburg</div>
        </a>
        <div class="flex md:hidden items-center mx-4 ">
          <button class="p-2 border border-silver rounded" (click)="mobileNavShow = !mobileNavShow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 top-" style="stroke: #8f8f8f">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="items-center text-xl px-2 font-semibold" (clickOutside)="mobileNavShow = false" exclude="nav" [ngClass]="mobileNavShow ? 'flex flex-col absolute right-0 top-20 mt-2 bg-blue-100 text-blue-900 w-full space-y-4 py-4 text-2xl font-semibold bg-gray-main text-white  border-b-2 border-t-2 border-blue-900': 'hidden md:flex md:flex-row'">
          <a class="cursor-pointer p-2" (click)="mobileNavShow = false" routerLink="">Startseite</a>
          <a class="cursor-pointer p-2" (click)="scrollToOrder(); mobileNavShow = false">Auftrag</a>
          <a class="cursor-pointer p-2" (click)="mobileNavShow = false" routerLink="preise">Preise</a>
          <a class="cursor-pointer p-2" (click)="mobileNavShow = false"  routerLink="/datenrettung/flash">Arbeitsweise</a>
          <a class="cursor-pointer  p-2"  (click)="scrollToContact(); mobileNavShow = false">Kontakt</a>
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
      <div class="fixed w-64 bg-white rounded-xl bottom-4 right-20 z-50 p-4 shadow" *ngIf="showPhone">
        <div class="flex justify-around items-center pb-4">
          <h2 class="text-xl font-bold underline text-center inline">Haben Sie noch Fragen?</h2>
          <button (click)="showPhone = false"><img class="inline" src="assets/x.svg"></button>
        </div>
        <h3 class="font-semibold pb-2">Ein Anruf klärt am schnellsten Ihr Anliegen: </h3>
        <a class="" href="tel:+4915221408008">
          <p class="font-semibold my-2">
            <img class="inline pr-4" src="/assets/phone.svg">0152 21408008</p>
        </a>
        <p>Auch an Wochenenden und Feiertagen erreichbar.</p>
      </div>
      <div class="fixed right-4 bottom-4 z-50 flex flex-row ">
        <a (click)="showPhone = true ; wawidgetHidden = true" class="cursor-pointer">
        <div class=" bg-white rounded-md  p-3 shadow mr-4" *ngIf="!showPhone ">
            <img src="/assets/help-circle.svg">
        </div>
        </a>

        <div class="" (click)="wawidgetHidden = false; showPhone = false" *ngIf="wawidgetHidden">
          <button class="flex align-middle p-3 rounded text-white" style="background-color: #14C656">
            <img class="h-6 w-6 inline" src="/assets/WhatsApp.svg" alt="Whatsapp Logo">
          </button>
        </div>
      </div>
      <div class="fixed right-10 bottom-10 shadow-2xl rounded-xl z-20" [ngClass]="wawidgetHidden ? 'hidden':''">
        <div class="flex align-middle text-white p-4 rounded-t-xl " style="background-color: rgb(9, 94, 84)">
          <span class="px-2">Jetzt Cassandra Schilling kontaktieren</span>
          <button (click)="wawidgetHidden = true">
            <img src="/assets/x-square.svg" alt="Close Whatsapp Widget Button"></button>
        </div>
        <div class="h-20" style="background-image: url('/assets/wa_bg.png') ;background-color: #E5DDD5"></div>
        <div class="bg-white flex justify-center p-2 rounded-b-xl">
          <a href="https://wa.me/+4915221408008">
            <button class="flex align-middle p-2 pr-4 rounded text-white" style="background-color: #14C656">
              <img class="h-6 w-6  inline mx-2" src="/assets/WhatsApp.svg" alt="Whatsapp Logo">Start Chat</button>
          </a>
        </div>
      </div>

    <button  (click)="mapsIframeShow = true" style="height: 300px">
      <div  *ngIf="!mapsIframeShow" class="bg-gray-200 text-center py-8">
        <span>Hier klicken um Google Maps anzuzeigen. Dabei werden Daten und Cookies von Google geladen</span>
      </div>
      <iframe class="text-center" *ngIf="mapsIframeShow" id="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.631212153642!2d9.203280792749238!3d48.89044172488516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d104bab8284b%3A0xfc656773e3df2e3c!2sDatenrettung%20Schilling!5e0!3m2!1sde!2sde!4v1621269476911!5m2!1sde!2sde"
              loading="lazy"
              width="{{innerWidth}}" height="300" frameborder="0" allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
    </button>
    <footer class="text-gray-700 bg-blue-50 pt-10" id="contact">
      <div class="container mb-4 text-center">
        <div class="grid grid-cols-2 space-y-4">
          <div class="col-span-2 md:col-span-1">
            <h1 class="mb-2 text-4xl">Kontakt</h1>
            <p>
              Cassandra Schilling<br/>
              Datenrettungsdienst<br/>
              <a class="font-bold" href="mailto:info@datenrettung-schilling.de">info@datenrettung-schilling.de</a><br/>
              Tel.: 0152 21408008
            </p>
          </div>
          <div class="col-span-2 md:col-span-1">
            <h1 class="mb-2 text-4xl">Standort</h1>
            <p>
              Friedrich-Ebert-Straße 70<br/>
              71638 Ludwigsburg<br/>
              Deutschland<br/>
            </p>
          </div>
          <div class="col-span-2 border-b py-4 divide-x-2 divide-blue-900">
            <a routerLink="impressum" class="pr-4">Impressum</a><a routerLink="datenschutz" class="px-4">Datenschutz</a><a class="pl-4" routerLink="agb">AGB</a>
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
  mobileNavShow: boolean = false;
  wawidgetHidden: boolean = true;
  mapsIframeShow: boolean = false;

  showPhone = false;
  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any) {
    router.events.subscribe(_ => {
      this.dropdownShow = false;
    });
  }

  ngOnInit(): void {
    this.innerWidth = document.documentElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(_): void {
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
      let contact = document.getElementById('contact')
      contact.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }, 200)
  }
}
