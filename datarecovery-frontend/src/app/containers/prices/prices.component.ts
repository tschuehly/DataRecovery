import { Component, OnInit } from '@angular/core';
import {Category, Product} from "../../model/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prices',
  template: `
    <div class="bg-white py-4">
      <div class="text-center py-4">
        <h1 class="text-4xl text-blue-900 tracking-wider">Preise</h1>
      </div>
      <div class="flex py-4">
        <div class="text-silver mx-auto justify-center">
          <span class="font-bold text-black">Wichtig:</span> Es handelt sich um
          <span class="font-bold text-black">Festpreise</span>, die nur <span class="font-bold text-black">nach Erfolg gelten.</span><br>
          Sollte keine Datenrettung möglich sein ist die Bearbeitung vollständig kostenfrei.<br>
          Alle angegebenen Preise sind bereits inklusive 19% Mehrwertsteuer.<br>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2  border-b-2 border-t-2">
      <div class="text-black flex justify-center">
          <div class="p-12 inline-block">
            <ng-container *ngFor="let category of categories " >
              <div class="mb-2">
                <h1 class="text-lg font-semibold mt-4 pb-2">{{category.title}}</h1>
                <div class="whitespace-pre-wrap" *ngIf="category.description">{{category.description}}</div>
                <ng-container *ngFor="let product of products">
                  <div  *ngIf="product.category.id === category.id && product.price">
                    {{category.name}} {{product.name}} <span class="whitespace-nowrap">{{product.price | number : '.2':'de' }} €</span>
                  </div>
                </ng-container>
              </div>
            </ng-container>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="bg-cover bg-top w-full" style="background-image:url('/assets/photo_2021-05-30_15-02-34.jpg')"></div>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class PricesComponent implements OnInit {
  products: Product[];
  flashProduct: Product[];
  categories: Category[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('api/product').subscribe( data => {
      this.products = data as Product[];
      this.products = this.products.filter(p => p.category.replacement !== true);
      this.categories = this.products.map(p => p.category);
      const categoryIds = this.categories.map(c => c.id);
      this.categories = this.categories.filter(({id}, index) => !categoryIds.includes(id, index + 1));
      this.categories.sort((c1,c2) => c1.sequenceId - c2.sequenceId)
      console.log(this.categories)
    })
  }

}
