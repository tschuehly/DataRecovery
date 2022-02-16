import { Component, EventEmitter, HostListener, Inject, Input, OnInit, Output } from '@angular/core';
import { User } from '../../model/model';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

declare let gtag: Function;
@Component({
  selector: 'app-navigation',
  template: `
    <div class="flex flex-col h-screen text-lg">
      <nav class="flex sticky w-full bg-grey-main text-2xl font-extralight  text-white px-2 py-4 md:p-4 justify-center
                    flex-col md:flex-row flex-wrap" id="navigation">
        <div class="md:w-fit flex justify-between md:block shrink-0">
          <a href="/">
            <img class="h-16 object-contain" src="/assets/LOGO_TJ_Datenrettung.webp">
          </a>
          <button class="block md:hidden" (click)="mobileNavShow = !mobileNavShow">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="40"
                 height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                 stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>

          </button>
        </div>

        <div class="flex flex-1 md:flex-row py-4 text-center md:space-y-0 space-y-4 space-x-8 xl:justify-end justify-center xl:space-x-12"
             [ngClass]="mobileNavShow ? 'flex flex-col space-x-0':'hidden md:flex'">
          <a class="cursor-pointer" (click)="scrollToOrder(); mobileNavShow = false">Auftragsformular</a>
          <a class="cursor-pointer" (click)="mobileNavShow = false" routerLink="preise" href="preise">Preise</a>
          <div class="h-full text-left flex self-center"  (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'"
               [excludeBeforeClick]="true" [ngClass]="{'bg-gray-300 md:bg-black': dropdownShow}">
            <a class="cursor-pointer self-center " (click)="dropdownShow = !dropdownShow">Einblick</a>
            <div class="border-solid border-2 border-black grid ga absolute justify-evenly p-4 bg-gray-300 text-2xl dropdown text-black py-4 space-y-4"
                 *ngIf="dropdownShow" [ngStyle]="mobileNavShow ? {'top':'0','width':'100%','left':'0','padding':'48px 0px','gap':'1.5rem'}:{}">
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/hdd"   href="/datenrettung/hdd">HDD Festplatten</a>
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/ssd"   href="/datenrettung/ssd">SSD Speicher</a>
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/flash" href="/datenrettung/flash">USB Stick<br>(micro) SD Karte</a>
              <a (click)="mobileNavShow = false" routerLink="/datenrettung/raid"  href="/datenrettung/raid">RAID<br>Fusion Drive</a>
            </div>
          </div>
          <a (click)="mobileNavShow = false" class="cursor-pointer" routerLink="philosophie" href="philosophie">Philosophie</a>
          <a class="cursor-pointer" (click)="mobileNavShow = false" routerLink="blog" href="blog">Blog</a>
          <a (click)="mobileNavShow = false;scrollToContact()" class="cursor-pointer">Kontakt</a>
          <ng-container *ngIf="currentUser">
            <a (click)="mobileNavShow = false" class="cursor-pointer" routerLink="/order">Bestellungen</a>
            <a (click)="mobileNavShow = false" class="cursor-pointer" routerLink="/product">Produkte</a>
            <a (click)="mobileNavShow = false" class="cursor-pointer" routerLink="/category">Kategorien</a>
          </ng-container>
        </div>
      </nav>

      <div class="flex-grow">

        <router-outlet></router-outlet>
      </div>

      <div class="fixed w-64 bg-white rounded-xl bottom-4 right-20 z-50 p-4 shadow-2xl" *ngIf="showPhone">
        <div class="flex justify-around items-center pb-4">
          <h2 class="font-semibold pb-2">Ein Anruf klärt am schnellsten Ihr Anliegen:</h2>
          <button (click)="showPhone = false"><img alt="close" class="inline" src="assets/x.svg"></button>
        </div>


        <p class="font-semibold pb-2">
          <img alt="phone" class="inline pr-4" src="/assets/phone.svg">0151 61408355</p>

        <p>Mo.-Sa. 09.00-19.00 Uhr erreichbar.</p>
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
      <div class="fixed right-20 bottom-4 shadow-2xl rounded-xl z-20" [ngClass]="wawidgetHidden ? 'hidden':''">
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
      <footer class="pt-8 bg-grey-main text-silver">
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

                Telefon: <span class="text-white">0841 12840705</span><br/>

                Mobil: <span class="text-white">0151 61408355</span>
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
          </div>
          <div>
            <a class="" routerLink="/login" *ngIf="currentUser" (click)="logout.emit()">Logout</a>
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
        if (event.status === 'allow') {
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
            if (event instanceof NavigationEnd) {
              gtag('config', 'G-VPEC2J7SDM',
                {
                  'page_path': event.urlAfterRedirects,
                  'anonymize_ip': true
                }
              );
            }
          });
        }
        if (event.status === 'deny') {
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
    if (document.getElementById('priceList') != null) {
      let pos = (document.documentElement.scrollTop || document.body.scrollTop)
      let max = document.getElementById('priceList').scrollHeight + document.getElementById('priceList').offsetHeight - 200
      if (pos > max) {
        if (this.showPhoneCounter < 1 && document.body.clientWidth > 512) {
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
