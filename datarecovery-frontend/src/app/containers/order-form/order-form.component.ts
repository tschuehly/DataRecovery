import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Order, Product} from '../../model/model';

@Component({
  selector: 'app-order-form',
  template: `
    <div class="w-full text-center text-4xl p-8">
      <h1>Auftragsformular</h1>
    </div>
    <form [formGroup]="this.orderForm" (ngSubmit)="onSubmit()">
      <div class="flex flex-col gap-2">
        <ng-container *ngIf="!productFormFilled">
          <label class="py-4 px-12">Auftrag zur Datenrettung:
            <select class="block mt-2 w-full text-black" formControlName="product" #productSelect required>
              <option *ngFor="let product of products" [value]="product.id">
                {{product.category.name}}  {{product.name}}  <span *ngIf="product.price">{{product.price | number : '.2':'de' }}€</span>
              </option>
            </select>
          </label>
          <ng-container *ngIf="productSelect.value">
            <label class="py-4 px-12">Ersatzdatenträger zur Abspeicherung:
              <select class="block mt-2 w-full text-black" formControlName="replacement" required>
                <option selected>Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei</option>
                <option *ngFor="let replacement of replacementProducts">
                  {{replacement.category.name}} {{replacement.name}} : {{replacement.price}}€
                </option>
              </select>
            </label>
          </ng-container>
          <ng-container *ngIf="productSelect.value">

            <label class="py-4 px-12 font-semibold">Ist eine Ratenzahlung gewünscht?:
              <select class="block mt-2 w-full text-black" formControlName="monthlyPayment" required>
                <option selected value=1>Keine Ratenzahlung</option>
                <option value=2>2 monatige Ratenzahlung (1% Gebühr)</option>
              </select>
            </label>
          </ng-container>
          <h2 class="px-12 font-semibold">Allgemeine Geschäftsbedingungen und Datenschutzrichtlinien:</h2>
          <div class="flex px-12">
            <input class="self-center" type="checkbox" formControlName="agb" required id="agbCheckbox" >
            <label for="agbCheckbox" class="ml-4">
              Hiermit bestätige ich meine Einverständnis für die vorhandenen
              <a class="font-semibold underline" routerLink="impressum">Datenschutzrichtlinien</a> wie für die
              <a class="font-semibold underline" routerLink="agb">allgemeinen Geschäftsbedingungen</a></label>

          </div>

          <div class="flex justify-center mt-4 bg-silver p-4 rounded-b-2xl">
            <button (click)="submitProduct()"
                    class="bg-white py-2 px-4 shadow rounded text-black"
                    [disabled]="!(this.orderForm.get('product').valid && this.orderForm.get('agb').value == true)"
                    [ngClass]="{'bg-gray-300 cursor-default': !(this.orderForm.get('product').valid && this.orderForm.get('agb').value == true)}">
              {{this.orderForm.get('product').valid && this.orderForm.get('agb').value == true ? "Auftragsdaten eingeben" : "Füllen Sie alle benötigten Felder aus" }}
            </button>
          </div>

        </ng-container>
        <ng-container *ngIf="productFormFilled">

          <h2 class="text-2xl px-12">Kontaktdaten:</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 px-12" formGroupName="customer">
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
          <div class="flex justify-center mt-4 bg-silver p-4 rounded-b-2xl">
            <button type="submit"
                    class="bg-white py-2 px-4 shadow rounded text-black "
                    [ngClass]="{'bg-gray-300 cursor-default': !orderForm.valid}"
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
  order: Order;
  productFormFilled = false;

  constructor(private fb: FormBuilder) {
  }

  @Output() orderOutput: EventEmitter<Order> = new EventEmitter();

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
      product: [''],
      replacement: ['Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei'],
      agb: [''],
      monthlyPayment: [1]
    });
    this.orderForm.get('product').valid
  }

  onSubmit(): void {
    this.order = (this.orderForm.getRawValue() as Order);
    this.order.orderProduct = this.products.find(product => product.id.toString() === this.orderForm.get('product').value);
    this.orderOutput.emit(this.order);
  }
  submitProduct(){
    console.log(this.orderForm.controls)
    this.productFormFilled = true
  }
}
