import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {NavigationComponent} from './containers/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderFormComponent } from './containers/order-form/order-form.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TrackingComponent } from './components/tracking/tracking.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './containers/order-details/order-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { UploadFileComponent } from './containers/upload-file/upload-file.component';
import { UpdateComponent } from './components/update/update.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaticComponent } from './containers/static/static.component';
import {ClickOutsideModule} from 'ng-click-outside';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailComponent } from './containers/category-detail/category-detail.component';
import { ImprintComponent } from './containers/imprint/imprint.component';
import { PricesComponent } from './containers/prices/prices.component';
import { AgbComponent } from './containers/agb/agb.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { AboutComponent } from './containers/about/about.component';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from "ngx-cookieconsent";
registerLocaleData(localeDe);

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "www.jungbauerdatenrettung.de"
  },
  "position": "bottom",
  "theme": "edgeless",
  "palette": {
    "popup": {
      "background": "#1d1d1d",
      "text": "#c5c5c5",
      "link": "#ffffff"
    },
    "button": {
      "background": "#c5c5c5",
      "text": "#000000",
      "border": "transparent"
    }
  },
  layout:'',
  layouts: {
    "custom":'{{messagelink}}'
  },
  elements:{
    messagelink: `
    <span class="p-4">{{message}} <a href="{{href}}" class="underline">{{link}}</a></span>

    `,
  },
  "type": "opt-in",
  "content": {
    "message": "Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies.",
    "dismiss": "Got it!",
    "deny": "Cookies verbieten",
    "link": "Datenschutzbestimmungen",
    "href": "/impressum",
    "policy": "Cookie Policy",
    "header": "Cookies used on the website!",
    "allow": "Cookies erlauben"
  }
}
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavigationComponent,
        OrderFormComponent,
        TrackingComponent,
        LoginComponent,
        OrderComponent,
        OrderDetailsComponent,
        ProductComponent,
        ProductDetailComponent,
        UploadFileComponent,
        UpdateComponent,
        StaticComponent,
        CategoryComponent,
        CategoryDetailComponent,
        ImprintComponent,
        PricesComponent,
        AgbComponent,
        AboutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 700, scrollOffset: 80}),
    BrowserAnimationsModule,
    ClickOutsideModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
