import { Component, OnInit } from '@angular/core';
import {Category, Product} from '../../model/model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  template: `
    <div class="container mx-auto h-full my-20">
      <div class="m-auto" *ngIf="!editProduct">
        <h1 class="text-2xl text-center mb-10">Produktübersicht</h1>
        <table class="border table-auto mx-auto">
          <thead>
            <th class="border px-2 py-1">ID</th>
            <th class="border px-2 py-1">Kategorie</th>
            <th class="border px-2 py-1">Produkt</th>
            <th class="border px-2 py-1">Preise</th>
            <th class="border px-2 py-1">Seq</th>

            <th class="border px-2 py-1">Ersatz</th>
            <th class="border px-2 py-1">Edit</th>
            <th class="border px-2 py-1">Löschen</th>
          </thead>
          <tbody>
          <tr *ngFor="let product of products">
            <td class="border p-2">{{product?.id}}</td>
            <td class="border p-2">{{product?.category?.name}}</td>
            <td class="border p-2">{{product?.name}}</td>
            <td class="border p-2">{{product?.price}} €</td>
            <td class="border p-2">{{product?.sequenceId}}</td>
            <td class="border p-2">{{product?.category?.replacement ? 'Ja':'Nein'}}</td>
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
            <td class="border px-6">
              <button (click)="showDelConfirm = true">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </td>
            <ng-container *ngIf="showDelConfirm">
              <td class="border pl-2">
                <button class="border p-2 bg-red-400 m-4" (click)="deleteProduct(product)">
                  Willst du wirklich das Produkt löschen
                </button>
              </td>
            </ng-container>
          </tr>

          </tbody>
        </table>
        <div class="text-right mt-4">
          <button class="border-2 rounded-xl p-2 text-black" (click)="editProduct = newProduct()">Neues Produkt</button>
        </div>
      </div>
      <div *ngIf="editProduct" class="m-auto border shadow-xl px-14 py-10">
        <app-product-detail [product]="editProduct"
                            [categories]="this.categories"
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
  showDelConfirm: boolean = false;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get('api/category').subscribe((categories: Category[]) => {
      this.categories = categories;
    },(error:HttpErrorResponse) => {
      if(error.status === 401){
        this.router.navigate(['/login'])

      }
    });
    this.http.get('api/product').subscribe((products: Product[]) => {
      this.products = products.sort((p1,p2) => p1.category.name.localeCompare(p2.category.name))
        .sort((p1) => p1.category.replacement ? 1 : -1);
    });
  }

  saveProduct(productToSave: Product): void {
    if(productToSave.id === null){
      this.http.post('api/product', productToSave).subscribe((product: Product) => {
        if (this.products.find(c => c.id === product.id)){
          this.products = this.products.map( c => c.id === product.id ? product : c);
        }else {
          this.products.push(product);
        }
      });
    }else {
      this.http.put('api/product', productToSave).subscribe((product: Product) => {
        this.products = this.products.map( p => p.id === product.id ? product : p);
      });
    }
    this.editProduct = null;
  }

  newProduct(): Product{
    this.http.post('api/product', {}).subscribe((product: Product) => {
      this.editProduct = product;
    });
    return this.editProduct;
  }

  deleteProduct(product: Product) {
    this.http.delete('api/product/' +product.id).subscribe( _=>{
      this.products = this.products.filter(p => p.id !== product.id)
    })
  }
}
