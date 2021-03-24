import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {NavigationComponent} from "./containers/navigation/navigation.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderFormComponent } from './containers/order-form/order-form.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TrackingComponent } from './components/tracking/tracking.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './containers/order-details/order-details.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component'
import { ObjectEditComponent } from './containers/object-edit/object-edit.component';
import { UploadFileComponent } from './containers/upload-file/upload-file.component';
import { UpdateComponent } from './components/update/update.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaticComponent } from './containers/static/static.component';
import {ClickOutsideModule} from 'ng-click-outside';
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
        ObjectEditComponent,
        UploadFileComponent,
        UpdateComponent,
        StaticComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule.forRoot({duration: 700, scrollOffset: 80}),
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
