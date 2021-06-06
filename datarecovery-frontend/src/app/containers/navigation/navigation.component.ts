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
    <div style="height: 300px">
      <iframe id="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.631212153642!2d9.203280792749238!3d48.89044172488516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d104bab8284b%3A0xfc656773e3df2e3c!2sDatenrettung%20Schilling!5e0!3m2!1sde!2sde!4v1621269476911!5m2!1sde!2sde"
              loading="lazy"
              width="{{innerWidth}}" height="300" frameborder="0" allowfullscreen="" aria-hidden="false"
              tabindex="0"></iframe>
    </div>
      <div class="fixed right-2 bottom-2 shadow-2xl rounded-xl" [ngClass]="wawidgetHidden ? 'hidden':''">
        <div class="flex align-middle text-white p-4 rounded-t-xl " style="background-color: rgb(9, 94, 84)">
          <span class="px-2">Jetzt Cassandra Schilling kontaktieren</span>
          <button (click)="wawidgetHidden = true">
            <img src="/assets/x-square.svg"></button>
        </div>
        <div class="h-20" style="background-image: url('/assets/wa_bg.png') ;background-color: #E5DDD5"></div>
        <div class="bg-white flex justify-center p-2 rounded-b-xl">
          <a href="https://wa.me/+4915221408008">
            <button class="flex align-middle p-2 pr-4 rounded text-white" style="background-color: #14C656">
              <img class="h-6 inline px-2" src="/assets/WhatsApp.svg">Start Chat</button>
          </a>
        </div>
      </div>
      <div class="fixed right-2 bottom-2 shadow-2xl rounded-xl z-20" [ngClass]="wawidgetHidden ? 'hidden':''">
        <div class="flex align-middle text-white p-4 rounded-t-xl " style="background-color: rgb(9, 94, 84)">
          <span class="px-2">Jetzt Tobias Jungbauer kontaktieren</span>
          <button (click)="wawidgetHidden = true">
            <img src="/assets/x-square.svg" alt="Close Whatsapp Widget Button"></button>
        </div>
        <div class="h-20" style="background-image: url('/assets/wa_bg.png') ;background-color: #E5DDD5"></div>
        <div class="bg-white flex justify-center p-2 rounded-b-xl">
          <a href="https://wa.me/+4915161408355">
            <button class="flex align-middle p-2 pr-4 rounded text-white" style="background-color: #14C656">
              <img class="h-6 w-6  inline mx-2" src="/assets/WhatsApp.svg" alt="Whatsapp Logo">Start Chat</button>
          </a>
        </div>
      </div>
      <div class="fixed right-2 bottom-2 md:hidden z-20" (click)="wawidgetHidden = false" *ngIf="wawidgetHidden">
        <button class="flex align-middle p-2 rounded text-white" style="background-color: #14C656">
            <img class="h-6 w-6 inline" src="/assets/WhatsApp.svg" alt="Whatsapp Logo">
        </button></div>
      <footer class="pt-8 bg-gray-main text-silver">
        <div class="mb-4 text-center">
          <div class=" flex flex-col md:flex-row justify-evenly pb-4"  id="contact">
            <div>
              <h1 class="mb-2 text-4xl">Kontakt</h1>
              <p>
                Tobias Jungbauer<br/>
                Datenrettung<br/>
                <a href="mailto:info@jungbauerdatenrettung.de">info@jungbauerdatenrettung.de</a><br/>
                Tel.: +49 15161408355
              </p>
            </div>

            <div>
              <h1 class="mt-4 md:mt-0 mb-2 text-4xl">Standort</h1>
              <p>
                Am Stein 9<br/>
                85049 Ingolstadt<br/>
                Deutschland<br/>
              </p>
            </div>
          </div>
            <ng-container *ngIf="mapsIframeShow">
              <div class="h-72 mb-4 bg-gray-main">
                <iframe id="myFrame"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10688.664885486834!2d11.1017109!3d47.9525097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37d4dd90c24065cb!2sTobias%20Jungbauer%20Datenrettung%20-%20AmmerseeDatenrettung.de!5e0!3m2!1sde!2sde!4v1604148030912!5m2!1sde!2sde"
                      width="{{innerWidth}}" height="300" allowfullscreen="" aria-hidden="false"
                      tabindex="0"></iframe>

              </div>
            </ng-container>
          <div class=" border-b py-4 divide-x-2 divide-silver">
            <a routerLink="impressum" class="pr-4">Impressum</a><a routerLink="datenschutz" class="px-4">Datenschutz</a><a class="pl-4" routerLink="agb">AGB</a>
      <div class="fixed right-2 bottom-2 " (click)="wawidgetHidden = false" *ngIf="wawidgetHidden">
        <button class="flex align-middle p-2 rounded text-white" style="background-color: #14C656">
          <img class="h-6 inline" src="/assets/WhatsApp.svg">
        </button></div>
    <footer class="text-gray-700 bg-blue-50 pt-10" id="contact">
      <div class="container mb-4 text-center">
        <div class="grid grid-cols-2">
          <div>
            <h1 class="mb-2 text-4xl">Kontakt</h1>
            <p>
              Cassandra Schilling<br/>
              Datenrettungsdienst<br/>
              cassandra@datenrettung-schilling.de<br/>
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
  mobileNavShow: boolean = false;
  wawidgetHidden: boolean = true;
  mapsIframeShow: boolean = false;

  private popupOpenSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  constructor(private router: Router,
              private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private ccService: NgcCookieConsentService) {
    router.events.subscribe(_ => {
      this.dropdownShow = false;
    });
  }

  ngOnInit(): void {
    this.innerWidth = document.documentElement.clientWidth;
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        if(event.status === "allow"){
          let node = document.createElement('script'); // creates the script tag
          node.src = 'https://www.googletagmanager.com/gtag/js?id=G-VPEC2J7SDM'; // sets the source (insert url in between quotes)
          node.type = 'text/javascript'; // set the script type
          node.async = true; // makes script run asynchronously
          node.charset = 'utf-8';
          // append to head of document
          document.getElementsByTagName('head')[0].appendChild(node);
          gtag('js', new Date());
          this.mapsIframeShow = true;
          this.router.events.subscribe(event => {
            if(event instanceof NavigationEnd){
              gtag('config', 'G-VPEC2J7SDM',
                {
                  'page_path': event.urlAfterRedirects,
                  'anonymize_ip': true
                }
              );
            }
          });
        }
        if(event.status === "deny"){
          this.mapsIframeShow = false;
        }
      });
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
