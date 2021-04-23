import { Component, OnInit } from '@angular/core';
import {Category, Order, Product} from '../../model/model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  template: `
    <div class="flex container mx-auto h-full mb-20">
      <div class="m-auto" *ngIf="!editProduct">
        <h1 class="text-2xl text-center mb-10">Produktübersicht</h1>
        <table class="border table-auto mx-auto">
          <thead>
          <th class="border px-2 py-1">ID</th>
          <th class="border px-2 py-1">Kategorie</th>
          <th class="border px-2 py-1">Produkt</th>
          <th class="border px-2 py-1">Preise</th>
          <th class="border px-2 py-1">Ersatz</th>
          <th class="border px-2 py-1">Edit</th>
          </thead>
          <tbody>
          <tr *ngFor="let product of products">
            <td class="border p-2">{{product.id}}</td>
            <td class="border p-2">{{product.category.name}}</td>
            <td class="border p-2">{{product.name}}</td>
            <td class="border p-2">{{product.price}} €</td>
            <td class="border p-2">{{product.category.replacement ? 'Ja':'Nein'}}</td>
            <td class="border pl-2">
              <button (click)="editProduct = product">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="28" height="28"
                     viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
                  <line x1="16" y1="5" x2="19" y2="8"/>
                </svg>
              </button>
            </td>

          </tr>
          </tbody>
        </table>
        <div class="text-right mt-4">
          <button class="button-primary" (click)="editProduct = newProduct()">Neues Produkt</button>
        </div>
      </div>
      <div *ngIf="editProduct" class="m-auto border shadow-xl px-14 py-10">
        <app-product-detail [product]="editProduct"
                            [categories]="categories"
                            (editProduct)="saveProduct($event)"
                            (close)="editProduct = null"></app-product-detail>
     </div>
    </div>
  `,
  styles: [
  ]
})
export class ProductComponent implements OnInit {
  products: Product[];
  categories: Category[];
  editProduct: Product;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('api/category').subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    this.http.get('api/product').subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  saveProduct(productToSave: Product): void {
    this.http.post('api/product', productToSave).subscribe((product: Product) => {
      this.products = this.products.map( p => p.id === product.id ? product : p);
    });
    this.editProduct = null;
  }

  newProduct(): Product{
    this.http.post('api/product', {}).subscribe((product: Product) => {
      this.editProduct = product;
    });
    return this.editProduct;
  }
}
