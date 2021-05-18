import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/model';
import {Router} from '@angular/router';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="flex flex-col h-screen">
    <nav class="flex fixed justify-between w-full text-silver bg-gray-main">
      <a href="">
        <div class="bg-gray-main p-4 ">
          <img src="/assets/LOGO_TJ_Datenrettung.svg" class="h-14">
        </div>
      </a>
      <div class="hidden md:flex flex items-center text-xl mr-8">
        <a class="mr-2 cursor-pointer">Auftrag</a>
        <a class="mr-2 ml-2 cursor-pointer"  (click)="scrollToPrice()">Preise</a>
        <div class="h-full text-center flex" (clickOutside)="dropdownShow = false" [exclude]="'div.dropdown'" [excludeBeforeClick]="true" [ngClass]="{'bg-black': dropdownShow}">
          <a class="mr-2 ml-2 cursor-pointer self-center" (click)="dropdownShow = !dropdownShow" >Arbeitsweise</a>


          <div class="flex flex-col absolute  justify-evenly p-3 bg-gray-300 text-xl dropdown text-black" style="margin-right: 2.8rem; margin-top: 5.5rem;" *ngIf="dropdownShow" >
            <a routerLink="/datenrettung/hdd">HDD Festplatten</a>
            <a routerLink="/datenrettung/ssd">SSD Festplatten</a>
            <a routerLink="/datenrettung/flash">USB Stick/SD Karte</a>
            <a routerLink="/datenrettung/raid">RAID</a>
          </div>
        </div>
        <a class="mr-2 ml-2 cursor-pointer"  (click)="scrollToPrice()">Kontakt</a>
        <div *ngIf="currentUser">
          <a class="mr-2 ml-2"  routerLink="/order">Bestellungen</a>
          <a class="mr-2 ml-2"  routerLink="/product">Produkte</a>
          <a class="mr-2 ml-2"  routerLink="/category">Kategorien</a>
        </div>
      </div>
    </nav>

    <div class="flex-grow mt-20">

        <router-outlet></router-outlet>
    </div>
    <footer class="pt-8 bg-gray-main text-silver">
      <div class="mb-4 text-center">
        <div class=" flex flex-col md:flex-row justify-evenly pb-8">
          <div>
            <h1 class="mb-2 text-4xl">Kontakt</h1>
            <p>
              Tobias Jungbauer<br/>
              Datenrettungsdienst<br/>
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
        <div class="h-72 mb-4 bg-gray-main">
          <iframe id="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10688.664885486834!2d11.1017109!3d47.9525097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37d4dd90c24065cb!2sTobias%20Jungbauer%20Datenrettungsdienst%20-%20AmmerseeDatenrettung.de!5e0!3m2!1sde!2sde!4v1604148030912!5m2!1sde!2sde" width="{{innerWidth}}" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class=" border-b py-4">
          <a routerLink="impressum" class="pr-4">Impressum & Datenschutz</a>|<a class="px-4" routerLink="agb">AGB</a>|<a class="pl-4">Kontakt</a>
        </div>
        <div class="col-span-2 pt-4">
          <span class="pr-4">Developed by <a class="font-bold" href="https://www.linkedin.com/in/tschuehly/">Thomas Schühly</a></span>|
          <span class="pl-4">Designed by Alina Göttig</span>
        </div>
        <div>
          <a class="mr-2 ml-2"  routerLink="/login" *ngIf="currentUser"  (click)="logout.emit()">Logout</a>
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
  scrollToPrice(): void {
    this.router.navigate(['']).then(_ => {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#priceList',
      });
    });
  }
}
