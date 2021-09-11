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
      <nav class="flex fixed justify-between w-full text-silver bg-gray-main z-50" id="navigation">
        <a  href="/">
          <div class="bg-gray-main pl-4 py-4">
            <img src="/assets/LOGO_TJ_Datenrettung.svg" class="h-14 w-96" alt="Datenrettung Jungbauer Logo">
          </div>
        </a>
        <div class="flex md:hidden items-center mx-4 flex-shrink">
          <button class="p-2 border border-silver rounded" aria-label="Mobile Menu Button" (click)="mobileNavShow = !mobileNavShow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 top-" style="stroke: #8f8f8f">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="items-center text-xl px-4  bg-gray-main" [ngClass]="mobileNavShow ? 'flex flex-col absolute right-0 top-20 w-full space-y-4 py-4 text-2xl font-semibold bg-gray-main text-white': 'hidden md:flex md:flex-row'">

        <a class="cursor-pointer p-2" (click)="mobileNavShow = false" routerLink="">Startseite</a>
         <a class="cursor-pointer p-2" (click)="mobileNavShow = false" routerLink="preise">Festpreise</a>
          <a class="cursor-pointer p-2" (click)="scrollToOrder(); mobileNavShow = false">Auftragsformular</a>
          <a (click)="mobileNavShow = false;scrollToContact()" class="cursor-pointer p-2">Kontakt</a>
          <div class="h-full text-center flex"  (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'"
               [excludeBeforeClick]="true" [ngClass]="{'bg-gray-300 md:bg-black ': dropdownShow}">
            <a class="cursor-pointer self-center p-2" (click)="dropdownShow = !dropdownShow">Arbeitsweise</a>


            <div class="grid gap-2 absolute justify-evenly p-3 bg-gray-300 text-xl dropdown text-black"
                 style="margin-right: 2.8rem; top: 5.5rem;" *ngIf="dropdownShow" [ngStyle]="mobileNavShow ? {'top':'0','width':'100%','left':'0','padding':'48px 0px','gap':'1.5rem'}:{}">
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/hdd">HDD Festplatten</a>
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/ssd">SSD Festplatten</a>
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/flash">USB Stick<br>SD Karte</a>
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/raid">RAID<br>Fusion Drive</a>
            </div>
          </div>
          <a (click)="mobileNavShow = false" class="cursor-pointer p-2" routerLink="philosophie">Philosophie</a>
          <div *ngIf="currentUser">
            <a (click)="mobileNavShow = false" class=" p-2" routerLink="/order">Bestellungen</a>
            <a (click)="mobileNavShow = false" class=" p-2" routerLink="/product">Produkte</a>
            <a (click)="mobileNavShow = false" class=" p-2" routerLink="/category">Kategorien</a>
          </div>
        </div>
      </nav>

      <div class="flex-grow mt-20">

        <router-outlet></router-outlet>
      </div>

      <div class="fixed w-64 bg-white rounded-xl bottom-4 left-4 z-50 p-4 shadow-2xl" *ngIf="showPhone">
        <div class="flex justify-around items-center pb-4">
          <h2 class="font-semibold pb-2">Ein Anruf klärt am schnellsten Ihr Anliegen:</h2>
          <button (click)="showPhone = false"><img class="inline" src="assets/x.svg"></button>
        </div>

        <p class="font-semibold pb-2"><img class="inline pr-4" src="/assets/phone.svg">0151 61408355</p>
        <p>Mo.-Sa. 09.00-20.00 Uhr erreichbar.</p>
      </div>
      <div class="fixed right-4 bottom-4 z-50 flex flex-row ">
        <button (click)="showPhone = true ; wawidgetHidden = true" class=" bg-white rounded-md  p-3 shadow mr-4" *ngIf="!showPhone ">
          <img src="/assets/phone.svg" alt="Telefon Symbol">
        </button>

        <div class="" (click)="wawidgetHidden = false; showPhone = false" *ngIf="wawidgetHidden">
          <button class="flex align-middle p-3 rounded text-white" style="background-color: #14C656">
            <img class="h-6 w-6 inline" src="/assets/WhatsApp.svg" alt="Whatsapp Logo">
          </button>
        </div>
      </div>
      <div class="fixed right-10 bottom-10 shadow-2xl rounded-xl z-20" [ngClass]="wawidgetHidden ? 'hidden':''">
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
      <footer class="pt-8 bg-gray-main text-silver">
      <ng-container *ngIf="mapsIframeShow">
              <div class="h-72 mb-4 bg-white">
                <iframe id="myFrame"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10688.664885486834!2d11.1017109!3d47.9525097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37d4dd90c24065cb!2sTobias%20Jungbauer%20Datenrettung%20-%20AmmerseeDatenrettung.de!5e0!3m2!1sde!2sde!4v1604148030912!5m2!1sde!2sde"
                      width="{{innerWidth}}" height="300" allowfullscreen="" aria-hidden="false"
                      tabindex="0"></iframe>

              </div>
            </ng-container>
        <div class="mb-4 text-center">
          <div class=" flex flex-col md:flex-row justify-evenly pb-4"  id="contact">
            <div>
              <h1 class="pt-4 md:mt-0 mb-2 text-4xl text-center text-gray-50">Kontakt</h1>
              <p class="font-semibold text-center text-white">
                Email:
                <a href="mailto:info@jungbauerdatenrettung.de"><span class="text-white">info@jungbauerdatenrettung.de</span></a><br/>
                Telefon: <span class="text-white">0151 61408355</span>
              </p>
            </div>

            <div>
              <h1 class="pt-4 md:mt-0 mb-2 text-4xl text-center text-white">Adresse</h1>
              <p class="font-semibold text-white text-center">
                Tobias Jungbauer<br/>
                Datenrettung<br/>
                Am Stein 9<br/>
                85049 Ingolstadt<br/>
              </p>
            </div>
          </div>

          <div class=" border-b py-4 divide-x-2 divide-silver text-gray-50">
            <a routerLink="impressum" class="pr-4">Impressum</a><a routerLink="datenschutz" class="px-4">Datenschutz</a><a class="pl-4" routerLink="agb">AGB</a>
          </div>
          <div class="col-span-2 pt-4 divide-x-2 divide-silver">
            <span class="pr-4">Website developed by <a class="font-bold" href="https://www.linkedin.com/in/tschuehly/">Thomas Schühly</a></span>
            <span class="pl-4">Designed by <span class="whitespace-nowrap">Alina Göttig</span></span>
          </div>
          <div>
            <a class="" routerLink="/login" *ngIf="currentUser" (click)="logout.emit()">Logout</a>
          </div>
        </div>
      </footer>
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
  showPhoneCounter = 0;

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
          window['clarity']('consent')
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
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if(document.getElementById('priceList') != null){
      let pos = (document.documentElement.scrollTop || document.body.scrollTop)
      let max = document.getElementById('priceList').scrollHeight + document.getElementById('priceList').offsetHeight - 200
      if(pos > max )   {
        if(this.showPhoneCounter < 1 && document.body.clientWidth > 512){
          this.showPhone = true;
        }
        this.showPhoneCounter += 1;
      }

    }
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
