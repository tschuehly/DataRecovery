import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer, Order, orderStateEnum, Product} from '../../model/model';

@Component({
  selector: 'app-order-form',
  template: `
    <div class="w-full text-center text-4xl mb-5">
      <h1>Auftragsformular</h1>
    </div>
    <form [formGroup]="this.orderForm" (ngSubmit)="onSubmit()">
      <div class="flex flex-col gap-2 px-12">
        <div class="flex flex-col gap-2" formGroupName="customer">
          <label>Vorname
            <input type="text" class="block mt-2 w-full" formControlName="firstName" required>
          </label>
          <label>Nachname
            <input type="text" class="block mt-2 w-full" formControlName="lastName" required>
          </label>
          <label>E-Mail-Adresse
            <input type="email" class="block mt-2 w-full" formControlName="email" required>
          </label>
          <label>Straße und Hausnummer
            <input type="text" class="block mt-2 w-full" formControlName="street" required>
          </label>
          <label>Postleitzahl
            <input type="text" class="block mt-2 w-full" formControlName="postalCode" required>
          </label>
          <label>Ort
            <input type="text" class="block mt-2 w-full" formControlName="city" required></label>
          <label>Optional: Telefonnummer
            <input type="text" class="block mt-2 w-full" formControlName="tel"></label>
        </div>
        <label>Auftrag zur Dattenrettung einer:
          <select class="block mt-2 w-full" formControlName="product" #productSelect required>
            <option *ngFor="let product of products" [value]="product.id">
              {{product.name}}  {{product.category}}  {{product.price}}€
            </option>
          </select>
        </label>
        <ng-container *ngIf="productSelect.value">
          <label>Ersatzdatenträger zur Abspeicherung:
            <select class="block mt-2 w-full" formControlName="replacement" required>
              <option selected>Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei</option>
              <option *ngFor="let replacement of replacementProducts">{{replacement.name}} : {{replacement.price}}€
              </option>
            </select>
          </label>
        </ng-container>

        <div class="flex justify-end mt-4">
          <button type="submit"
                  class="button-primary"
                  [ngClass]="{'bg-red-500': !orderForm.valid}"
                  [disabled]="!orderForm.valid">{{orderForm.valid ? "Auftrag abschicken" : "Füllen sie alle benötigten Felder aus" }}</button>
        </div>
      </div>
    </form>
  `,
  styles: [
    `input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {
      background-color: #ffdddd;
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
    });
  }

  onSubmit(): void {
    this.order = (this.orderForm.getRawValue() as Order);
    this.order.product = this.products.find(product => product.id.toString() === this.orderForm.get('product').value );
    this.orderOutput.emit(this.order);
  }
}
