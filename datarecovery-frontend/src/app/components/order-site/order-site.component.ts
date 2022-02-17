import { Component, OnInit } from '@angular/core';
import {Category, Order, Product} from '../../model/model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-site',
  template: `
    <div class="py-36">
      <div class="py-6 bg-white text-gray-800 px-2" id="order_form">

        <app-order-form
          *ngIf="products && orderSubmitted === null"
          [categoryId]="selectedCategoryId"
          [products]="products"
          [replacementProducts]="replacementProducts"
          (orderOutput)="submitOrder($event)"></app-order-form>

        <div class="p-12 text-blue-900 text-xl font-bold mt-8"  id="order_submit" *ngIf="orderSubmitted !== null">
          <ng-container *ngIf="orderSubmitted === true">
        <pre class="whitespace-pre-wrap">
Ihr Auftrag wurde erfolgreich übermittelt.

Sie sollten bald eine Bestätigungsmail mit weiteren Informationen erhalten.

Schauen Sie auch in Ihrem Spam Ordner nach!
        </pre>
          </ng-container>
          <ng-container *ngIf="orderSubmitted === false">
            <p class="inline-block">Ihre Auftrag konnte nicht übermittelt werden.<br>
              Bitte kontaktieren sie Cassandra Schilling über eine Email an:<br>
              <button class="btn btn-primary mt-4">
                <a href="mailto:info@datenrettung-schilling.de?subject=Anfrage%20wegen%20einer%20Datenrettung&amp">info@datenrettung-schilling.de</a>
              </button>
            </p>
          </ng-container>
        </div>

        <div *ngIf="!products" class="text-center py-8">
          <p>Bitte kontaktieren sie Cassandra Schilling über eine Email an:
            <span class="text-green-700 font-bold">info@datenrettung-schilling.de</span>
          </p>
          <button class="border-2 rounded-md p-2 mt-4">

            <a
              href="mailto:info@datenrettung-schilling.de?subject=Anfrage%20wegen%20einer%20Datenrettung&amp">Hier
              klicken um eine Email zu senden</a>
          </button>
        </div>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class OrderSiteComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  orderSubmitted: boolean = null;
  products: Product[];
  flashProduct: Product[];
  categories: Category[];
  replacementProducts: Product[];
  selectedCategoryId: string;

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.selectedCategoryId = value.categoryId;
    });

    this.http.get('api/product').subscribe( data => {
      this.products = data as Product[];
      this.replacementProducts = this.products.filter(p => p.category.replacement === true);
      this.products = this.products.filter(p => p.category.replacement === false);

      this.categories = this.products.map(p => p.category);
      const categoryIds = this.categories.map(c => c.id);
      this.categories = this.categories.filter(({id}, index) => !categoryIds.includes(id, index + 1));

    });
  }

  submitOrder(order: Order): void {

    this.http.post('api/order/create', order).subscribe(
      data => {
        this.orderSubmitted = true;
        setTimeout(function() {
          const orderSubmit = this.document.getElementById('order_submit');
          orderSubmit.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }, 200);
      },
      error => {
        this.orderSubmitted = false;
        console.log('Error Occured');
      }
    );
  }
}
