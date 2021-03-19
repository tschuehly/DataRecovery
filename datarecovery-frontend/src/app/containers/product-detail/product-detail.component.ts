import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, Product} from '../../model/model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
    <div>
      <h1 class="text-center text-2xl mb-5">Produkt: {{product.category + " " + product.name}} </h1>
      <div class="grid grid-cols-1 text-lg gap-4">
        <form [formGroup]="editProductForm" class="mx-auto text-center grid grid-cols-2 gap-2">
          <label>Ersatz:
            <input class="mb-1" type="checkbox" [checked]="replacement" (change)="replacement = !replacement">
          </label>
          <label *ngIf="!replacement">Kategorie:
            <input type="text" formControlName="category" class="mt-1 mb-2 pl-3 block">
          </label>
          <label>Name:
            <input type="text" formControlName="name" class="mt-1 mb-2 block pl-3">
          </label>
          <div>
            <label>Preis:
              <div class="mt-1 relative w-full">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span>€</span>
                </div>
                <input type="text" formControlName="price" class="block pl-3">
              </div>
            </label>
          </div>

        </form>
        <div class="flex justify-between mt-6">
          <button (click)="saveProduct()" class="border-2 rounded-md p-2 border-black">Speichern</button>
          <button (click)="close.emit()" class="border-2 rounded-md p-2 bg-red-500 border-black">Schließen
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() close: EventEmitter<void> = new EventEmitter();
  replacement = false;
  editProductForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.product.category === 'replacement'){
      this.replacement = true;
    }
    this.editProductForm = this.fb.group({
      id: [this.product.id],
      category : [this.product.category],
      name: [this.product.name],
      price: [this.product.price, Validators.pattern('^[0-9]*$')]
    });
  }

  saveProduct(): void {

    this.product = this.editProductForm.getRawValue() as Product;
    if(this.replacement === true){
      this.product.category = 'replacement';
    }
    this.editProduct.emit(this.product);
  }
}
