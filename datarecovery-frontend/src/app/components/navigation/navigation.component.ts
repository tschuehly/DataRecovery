import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '../../model/model';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import {
  NgcCookieConsentService,
  NgcStatusChangeEvent,
} from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

declare let gtag: Function;
@Component({
  selector: 'app-navigation',
  template: `
    <div class="flex flex-col text-lg">
      <nav
        class="flex sticky w-full bg-gray-main text-2xl font-extralight  text-white px-2 py-4 md:p-4 justify-center
                    flex-col md:flex-row flex-wrap top-0 z-[400]"
        id="navigation"
      >
        <div class="md:w-fit flex justify-between md:block shrink-0">
          <a href="/">
            <img
              class="h-20 object-contain"
              src="/assets/brand black thick(1).svg" alt="backround"
            />
          </a>
          <button
            class="block md:hidden"
            (click)="mobileNavShow = !mobileNavShow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-2"
              alt="icon"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        <div
          class="flex flex-1 md:flex-row py-6 text-center md:space-y-0 space-y-4 space-x-8 xl:justify-end justify-center xl:space-x-12"
          [ngClass]="
            mobileNavShow ? 'flex flex-col space-x-0' : 'hidden md:flex'
          "
        >
        <a
          class="cursor-pointer font-medium"
          (click)="mobileNavShow = false"
          routerLink="/"
          href="/"
          >Startseite</a
        >
          <a
          class="cursor-pointer font-medium"
          (click)="mobileNavShow = false; scrollToPrices()"
          routerLink="preise"
          href="preise"
          >Preise</a
        >
        <button
            class="cursor-pointer font-medium"
            (click)="scrollToOrder(); mobileNavShow = false"
            >Auftragsformular</button
          >
          <div
            class="h-full text-left flex self-center"
            (clickOutside)="dropdownShow = false"
            [exclude]="'div.dropdown'"
            [excludeBeforeClick]="true"
            [ngClass]="{ 'bg-gray-300 md:bg-black': dropdownShow }"
          >
          <a
          class="cursor-pointer font-medium"
          (click)="mobileNavShow = false; scrollToArbeitsweise()"
          routerLink="/datenrettung/arbeitsweise"
          href="/datenrettung/arbeitsweise"
          >Arbeitsweise </a
        >
          </div>

          <button
          (click)="mobileNavShow = false; scrollToContact()"
          class="cursor-pointer font-medium"
          >Kontakt</button
        >
        </div>
      </nav>
      <div *ngIf="currentUser" class="bg-neutral-700 text-white flex justify-around py-4">
          <a
            (click)="mobileNavShow = false"
            class="cursor-pointer"
            routerLink="/admin/order"
            >Bestellungen</a
          >
          <a
            (click)="mobileNavShow = false"
            class="cursor-pointer"
            routerLink="/admin/keyword"
            >Keyword</a
          >
          <a
            (click)="mobileNavShow = false"
            class="cursor-pointer"
            routerLink="/admin/product"
            >Produkte</a
          >
          <a
            (click)="mobileNavShow = false"
            class="cursor-pointer"
            routerLink="/admin/category"
            >Kategorien</a
          >
      </div>
      <div class="flex-grow">
        <router-outlet></router-outlet>
      </div>

      <div
        class="fixed w-64 bg-white rounded-xl bottom-4 right-20 z-50 p-4 shadow-2xl"
        *ngIf="showPhone"
      >
        <div class="flex justify-around items-center text-base md:text-lg pb-4">
          <span>
          <div class="flex justify-center">
  <img class="h-28 md:h-32 pb-2" src="assets/Profil.webp">
  </div>
            <span class="font-semibold pb-2">Haben Sie Fragen? </span>
            <p>Gerne können Sie diese per Telefon stellen:</p>
          </span>
          <button (click)="showPhone = false">
            <img alt="close" class="inline" src="assets/x.svg" />
          </button>
        </div>

        <p class="font-semibold text-base md:text-lg pb-2">
          <img alt="phone" class="inline pr-4" src="/assets/phone.svg" /><a href="tel:0841 12840705">0841 12840705</a>
        </p>

        <p class="text-base md:text-lg">Mo.-Sa. 08:00-20:00 Uhr erreichbar.</p>
      </div>
      <div class="fixed right-4 bottom-4 z-50 flex flex-row ">
        <button
          (click)="showPhone = true; wawidgetHidden = true"
          class=" bg-white rounded-md  p-3 shadow mr-4"
          *ngIf="!showPhone"
        >
          <img src="/assets/phone.svg" alt="Telefon Symbol" />
        </button>

        <div
          class=""
          (click)="wawidgetHidden = false; showPhone = false"
          *ngIf="wawidgetHidden"
        >
          <button
            class="flex align-middle p-3 rounded text-white"
            style="background-color: #14C656"
          >
            <img
              class="h-6 w-6 inline"
              src="/assets/WhatsApp.svg"
              alt="Whatsapp Logo"
            />
          </button>
        </div>
      </div>
      <div
        class="fixed right-24 bottom-4 shadow-2xl rounded-xl z-20"
        *ngIf="!wawidgetHidden"
      >
        <div
          class="flex align-middle text-white p-4 rounded-t-xl "
          style="background-color: rgb(9, 94, 84)"
        >
          <span class="px-2">über Whatsapp kontaktieren</span>
          <button (click)="wawidgetHidden = true">
            <img
              src="/assets/x-square.svg"
              alt="Close Whatsapp Widget Button"
            />
          </button>
        </div>
        <div class="h-20" style="background-color: #E5DDD5">
          <img
            src="/assets/wa_bg.png"
            class="overflow-hidden h-20 object-none w-full"
            loading="lazy"
          />
        </div>
        <div class="bg-white flex justify-center p-2 rounded-b-xl">
          <a href="https://wa.me/+4915161408355" target="_blank">
            <button
              class="flex align-middle p-2 pr-4 rounded text-white"
              style="background-color: #14C656"
            >
              <img
                class="h-6 w-6  inline mx-2"
                src="/assets/WhatsApp.svg"
                alt="Whatsapp Logo"
              />Start Chat
            </button>
          </a>
        </div>
      </div>
      <footer class="pt-8 bg-gray-main text-silver">
        <ng-container *ngIf="mapsIframeShow">
          <div class="h-72 mb-4 bg-white">
            <iframe
              id="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10688.664885486834!2d11.1017109!3d47.9525097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37d4dd90c24065cb!2sTobias%20Jungbauer%20Datenrettung%20-%20AmmerseeDatenrettung.de!5e0!3m2!1sde!2sde!4v1604148030912!5m2!1sde!2sde"
              alt="Bewertung"
              width="{{ innerWidth }}"
              height="300"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </ng-container>
        <div class="mb-4 py-4 text-center">
          <div
            class=" flex flex-col md:flex-row justify-evenly pb-4"
            id="contact"
          >
            <div>
              <h3
                class="font-semibold pt-4 md:mt-0 mb-2 text-2xl md:text-3xl text-center text-gray-50"
              >
                Kontakt
              </h3>
              <p
                class=" text-center text-lg md:text-xl text-white"
              >
                E-Mail:
                <a href="mailto:info@jungbauerdatenrettung.de"
                  >
                  <span class="text-white"
                    >info@jungbauerdatenrettung.de</span
                  ></a
                ><br />

                Telefon: <span class="text-white"><a href="tel:0841 12840705">0841 12840705</a></span><br />

               
              </p>
            </div>

            <div>
              <h3
                class="font-semibold pt-4 md:mt-0 mb-2 text-2xl md:text-3xl text-center text-white"
              >
                Adresse
              </h3>
              <p
                class=" text-lg md:text-xl  text-white text-center"
              >
                Tobias Jungbauer<br />
                Datenrettung<br />
                Am Stein 9<br />
                85049 Ingolstadt<br />
              </p>
            </div>
          </div>

          <div
            class="border-b pt-10 py-4 divide-x-2 text-lg md:text-xl divide-silver text-gray-50"
          >
            <a href="/rechtliches/impressum" class="px-4 text-base md:text-xl"
              >Impressum</a
            ><a href="/rechtliches/datenschutz" class="px-4 text-base md:text-xl"
              >Datenschutz</a
            ><a href="/rechtliches/agb" class="px-4 text-base md:text-xl"
              >AGB</a>
              <a href="/datenrettung" class="px-4 text-base md:text-xl"
              >Blog</a>
          </div>
          <div
            class="col-span-2 pt-5 text-base md:text-lg divide-x-2 divide-silver"
          >
            <span class="pr-4"
              >Website entwickelt von
              <a class="font-bold" href="https://www.tschuehly.de/" target="_blank"
                >Thomas Schühly</a
              ></span
            >
          </div>
          <div>
            <a
              class=""
              routerLink="/admin/login"
              *ngIf="currentUser"
              (click)="logout.emit()"
              >Logout</a
            >
          </div>
        </div>
      </footer>
    </div>
  `,
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
  constructor(
    private router: Router,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private ccService: NgcCookieConsentService
  ) {
    router.events.subscribe((_) => {
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
          window['clarity']('consent');
          gtag('js', new Date());
          this.mapsIframeShow = true;
          this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
              gtag('config', 'G-VPEC2J7SDM', {
                page_path: event.urlAfterRedirects,
                anonymize_ip: true,
              });
            }
          });
        }
        if (event.status === 'deny') {
          this.mapsIframeShow = false;
        }
      }
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(_): void {
    this.innerWidth = document.documentElement.clientWidth;
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (document.getElementById('priceList') != null) {
      let pos = document.documentElement.scrollTop || document.body.scrollTop;
      let max =
        document.getElementById('priceList').scrollHeight +
        document.getElementById('priceList').offsetHeight -
        200;
      if (pos > max) {
        if (this.showPhoneCounter < 1) {
          this.showPhone = true;
        }
        this.showPhoneCounter += 1;
      }
    }
  }
  scrollToOrder(): void {
    this.router.navigate(['']).then((_) => {
      setTimeout(function () {
        let orderForm = document.getElementById('order_form');
        orderForm.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 200);
    });
  }

  scrollToContact(): void {
    setTimeout(function () {
      let contact = document.getElementById('contact');
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 200);
  }

  scrollToPrices(): void {
    setTimeout(function () {
      let contact = document.getElementById('prices');
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 200);
  }

  scrollToArbeitsweise(): void {
    setTimeout(function () {
      let contact = document.getElementById('arbeitsweise');
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 200);
  }


  scrollToaboutme(): void {
    setTimeout(function () {
      let contact = document.getElementById('aboutme');
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 200);
  }
}
