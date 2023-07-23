import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { First40WordsPipe } from '../../pipes/first-twenty-words.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { PriceListComponent } from './price-list/price-list.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    First40WordsPipe,
    SlideShowComponent,
    ReviewComponent,
    OrderFormComponent,
    PriceListComponent,
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
})
export class HomeModule {}
