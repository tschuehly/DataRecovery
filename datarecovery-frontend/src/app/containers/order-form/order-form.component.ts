import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category, Order, Product} from '../../model/model';

@Component({
  selector: 'app-order-form',
  template: `
    <div class="w-full text-center text-4xl py-8">
      <h2>Auftrag zur Datenrettung</h2>
    </div>
    <form [formGroup]="this.orderForm" (ngSubmit)="onSubmit()">
      <div class="flex flex-col gap-2 px-4 md:px-12">
        <ng-container *ngIf="!productFormFilled">

          <label class="py-4 font-semibold">Was für einen Datenträger haben Sie?
            <select class="block mt-2 w-full text-black" formControlName="selectedCategory" required>
              <option *ngFor="let category of categories"  [value]="category.id" >
                {{category.name}}
              </option>
            </select>
          </label>
          <label class="py-4 font-semibold" [hidden]="this.orderForm.get('selectedCategory').invalid" >Welche Größe hat Ihr Datenträger?
            <select class="block mt-2 w-full text-black" formControlName="product" #productSelect required>
              <ng-container *ngFor="let product of products">
                <option *ngIf="product.category.id == this.orderForm.get('selectedCategory').value" [value]="product.id">
                  {{product.category.name}}  {{product.name}}  <span *ngIf="product.price">{{product.price | number : '.2':'de' }}€</span>
                </option>

              </ng-container>
            </select>
          </label>
          <ng-container *ngIf="productSelect.value">
            <label class="py-4 font-semibold">Ersatzdatenträger zur Abspeicherung:
              <select class="block mt-2 w-full text-black" formControlName="replacement" required>
                <option selected>Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei</option>
                <option class="hover:bg-blue-100" *ngFor="let replacement of replacementProducts">
                  {{replacement.category.name}} {{replacement.name}} : {{replacement.price}}€
                </option>
              </select>
            </label>
          </ng-container>
          <label class="font-semibold">Zusätzliche Bemerkungen (Wasserschaden? etc.)
            <textarea class="mt-1 w-full text-black" formControlName="note"></textarea>
          </label>
          <h2 class="font-semibold inline text-center">Allgemeine Geschäftsbedingungen und Datenschutzrichtlinien:</h2>
          <div class="flex">
            <input class="self-center w-6 h-6 bg-red-300 border-2 border-black" type="checkbox" formControlName="agb" id="agbCheckbox" >
            <label for="agbCheckbox" class="ml-4">
              Hiermit bestätige ich meine Einverständnis für die vorhandenen
              <a class="font-semibold underline" routerLink="datenschutz">Datenschutzrichtlinien</a> wie für die
              <a class="font-semibold underline" routerLink="agb">allgemeinen Geschäftsbedingungen</a></label>

                      </div>
          <div class="flex justify-center mt-4 p-4 rounded-b-2xl">
            <button (click)="submitProduct()"
                    class="bg-white py-2 px-4  text-lg shadow rounded text-black border-2 border-black"
                    [disabled]="!(this.orderForm.get('product').valid && this.orderForm.get('agb').value == true)"
                    [ngClass]="{'bg-gray-200 cursor-default': !(this.orderForm.get('product').valid && this.orderForm.get('agb').value == true)}">
              <ng-container *ngIf="this.orderForm.get('agb').value == false && this.orderForm.get('product').valid ">Bitte bestätigen Sie die AGB und Datenschutzrichtlinien </ng-container>
              <ng-container *ngIf="this.orderForm.get('product').valid && this.orderForm.get('agb').value == true">Kontaktdaten eingeben</ng-container>
              <ng-container *ngIf="!this.orderForm.get('product').valid">Wählen Sie Ihren Datenträger aus</ng-container>
            </button>
          </div>

        </ng-container>
        <ng-container *ngIf="productFormFilled">

          <h2 class="text-2xl px-12">Kontaktdaten:</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 md:px-12" formGroupName="customer">
            <label>Vorname
              <input type="text" class="mt-1 w-full text-black" formControlName="firstName" required>
            </label>
            <label>Nachname
              <input type="text" class="mt-1 w-full text-black" formControlName="lastName" required>
            </label>
            <label>E-Mail-Adresse
              <input type="email" class="mt-1 w-full text-black" formControlName="email" required>
            </label>
            <label>Straße und Hausnummer
              <input type="text" class="mt-1 w-full text-black" formControlName="street" required>
            </label>
            <label>Postleitzahl
              <input type="text" class="mt-1 w-full text-black" formControlName="postalCode" required>
            </label>
            <label>Ort
              <input type="text" class="mt-1 w-full text-black" formControlName="city" required></label>
            <label>Optional: Telefonnummer
              <input type="text" class="mt-1 w-full text-black" formControlName="tel"></label>
          </div>
          <div class="flex justify-center mt-4 p-4 rounded-b-2xl">
            <button type="submit"
                    class="bg-white py-2 px-4 shadow rounded text-black  border-2 border-black"
                    [ngClass]="{'bg-gray-200 cursor-default': !orderForm.valid}"
                    [disabled]="!orderForm.valid">{{orderForm.valid ? "Auftrag abschicken" : "Füllen Sie alle benötigten Felder aus" }}</button>
          </div>
        </ng-container>

      </div>
    </form>
  `,
  styles: [
    `input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {
      background-color: #fdd;
    }

    option {
      background: #fff;
    }`
  ]
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;
  @Input() products: Product[];
  @Input() replacementProducts: Product[];
  categories: Category[];
  order: Order;
  productFormFilled = false;
  constructor(private fb: FormBuilder) {
  }

  @Output() orderOutput: EventEmitter<Order> = new EventEmitter();
  @Input()
  set categoryId(categoryId: string){
    this.orderForm?.get('selectedCategory').patchValue(categoryId);
    this.orderForm?.get('product').markAsTouched();
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      customer: this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        tel: [''],
        email: [''],
        postalCode: ['', Validators.pattern('^[0-9]*$')],
        city: [''],
        street: [''],

      }),
      note: [],
      product: [''],
      selectedCategory: [''],
      replacement: ['Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei'],
      agb: ['']
    });

    this.categories = this.products.map(p => p.category).filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj.id).indexOf(obj.id) === pos;
    });
  }

  onSubmit(): void {
    this.order = (this.orderForm.getRawValue() as Order);
    this.order.product = this.products.find(product => product.id.toString() === this.orderForm.get('product').value);
    this.orderOutput.emit(this.order);
  }
  submitProduct(): void{
    console.log(this.orderForm.controls);
    this.productFormFilled = true;
  }
}
