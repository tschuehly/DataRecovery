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
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
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
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
