import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {NavigationComponent} from "./containers/navigation/navigation.component";
import {ReactiveFormsModule} from "@angular/forms";
import { OrderFormComponent } from './containers/order-form/order-form.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { TrackingComponent } from './components/tracking/tracking.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    OrderFormComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
