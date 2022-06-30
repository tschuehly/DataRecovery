import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ClickOutsideModule } from 'ng-click-outside';
import { PricesComponent } from './components/prices/prices.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { AboutComponent } from './components/insight/about/about.component';
import {
  NgcCookieConsentConfig,
  NgcCookieConsentModule,
} from 'ngx-cookieconsent';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { SiteNotFoundComponent } from './components/site-not-found/site-not-found.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HomeModule } from './components/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeDe);
const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'www.jungbauerdatenrettung.de',
  },
  position: 'bottom',
  theme: 'edgeless',
  palette: {
    popup: {
      background: '#1d1d1d',
      text: '#c5c5c5',
      link: '#ffffff',
    },
    button: {
      background: '#c5c5c5',
      text: '#000000',
      border: 'transparent',
    },
  },
  container: document.getElementById('cookie'),
  layout: '',
  layouts: {
    custom: '{{messagelink}}',
  },
  elements: {
    messagelink: `
    <span class="p-4">{{message}} <a href="{{href}}" class="underline">{{link}}</a></span>

    `,
  },
  type: 'opt-in',
  content: {
    message:
      '<div class="text-sm md:text-lg">Um unsere Webseite graphisch optimal zu gestalten und fortlaufend verbessern zu können verwenden wir Cookies.</div>',
    dismiss: 'Got it!',
    deny: 'Cookies verbieten',
    link: 'Datenschutzbestimmungen',
    href: 'rechtliches/datenschutz',
    policy: 'Cookie Policy',
    header: 'Cookies used on the website!',
    allow:
      '<div class="flex flex-row items-center">Cookies erlauben <img class="h-10" height="100" src="/assets/favicon/icons8-cookie-100.png" alt="cookie"> </div>',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PricesComponent,
    SiteNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({ duration: 700, scrollOffset: 80 }),
    ClickOutsideModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    ScullyLibModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {
  @ViewChild(NavigationComponent) nav;
}
