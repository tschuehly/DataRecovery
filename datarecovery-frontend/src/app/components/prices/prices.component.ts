import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../../model/model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-prices',
  template: `
    <div
      class="bg-center bg-gray-main bg-cover bg-no-repeat "
      style="background-image: url('/assets/prices_header.jpg')"
    >
      <div class="flex md:ml-80 justify-center md:justify-start ">
        <h1
          class="text-2xl md:text-4xl leading-relaxed text-center text-silver text-shadow bg-gray-main p-16"
        >
          Tobias<br />Jungbauer<br />Datenrettung
        </h1>
      </div>
    </div>
    <div class="bg-white text-center">
      <h1 class="text-2xl md:text-4xl text-black py-5 tracking-wider">
        Datenrettung Preise
      </h1>
    </div>
    <div class="bg-gray-main  ">
      <div class="container flex ">
        <div
          class="text-white text-base md:text-xl py-4 mx-auto justify-center"
        >
          <span class="text-white">❶</span> Festpreise werden bei Erfolg berechnet (keine Vorkasse).<br />
          <span class="text-white"
            >❷ Der Erfolg wird anhand von Ihnen gestellten Zielen definiert
            (z.B. "User-Ordner").<br />
            <span class="text-white">❸ Bei Misserfolg</span> inkl. Rückversand (DHL Paket) kostenfrei.</span
          ><br />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2  border-b-2 border-t-2">
      <div class="text-white text-base md:text-lg">
        <div
          class="bg-gray-main px-4 py-12"
          style="box-shadow: 0 2px 25px 0 black"
        >
          <span class="font-bold text-2xl text-white"
            >Festpreise nach Gesamtkapazität:</span
          >
          <ng-container *ngFor="let category of categories">
            <div class="mb-2">
              <h1 class="font-semibold text-lg mt-4 pb-2">
                {{ category.title }}
              </h1>
              <div class="whitespace-pre-wrap text-lg" *ngIf="category.description">
                {{ category.description }}
              </div>
              <ng-container *ngFor="let product of products">
                <div class="text-lg"
                  *ngIf="product.category.id === category.id && product.price"
                >
                  {{ category.name }} {{ product.name }}
                  <span class="whitespace-nowrap"
                    >{{ product.price | number: '.2':'de' }} €</span
                  >
                </div>
              </ng-container>
            </div>
          </ng-container>
          <div class="flex justify-end pt-8">
            <button
              class="text-lg md:text-xl bg-white py-3 px-4 shadow rounded text-black"
              (click)="this.scrollService.scrollToOrder()"
            >
              weiter zum Ablauf & Auftrag
            </button>
          </div>
          <br />Alle Preise sind bereits inklusive 19% Mehrwertsteuer.<br/>
          <br />Bei selbstgeöffnete/verunreinigten HDD Festplatten entfallen die angegebenen Festpreise. 
          <p>Fragen Sie in diesem Spezialfall bitte gesondert nach den entsprechenden Konditionen.<p><br/>
        </div>
      </div>

      <div
        class="bg-gray-main bg-cover bg-center"
        style="background-image:url('/assets/prices_main.jpg')"
      ></div>
    </div>
  `,
  styles: [],
})
export class PricesComponent implements OnInit {
  products: Product[];
  flashProduct: Product[];
  categories: Category[];

  constructor(private http: HttpClient, public scrollService: ScrollService) {}

  ngOnInit(): void {
    this.http.get('api/product').subscribe((data) => {
      this.products = data as Product[];
      this.products = this.products.filter(
        (p) => p.category.replacement !== true
      );
      this.products.sort((p1, p2) => p1.sequenceId - p2.sequenceId);
      this.categories = this.products.map((p) => p.category);
      const categoryIds = this.categories.map((c) => c.id);
      this.categories = this.categories.filter(
        ({ id }, index) => !categoryIds.includes(id, index + 1)
      );
      this.categories.sort((c1, c2) => c1.sequenceId - c2.sequenceId);
      console.log(this.categories);
    });
  }
}
