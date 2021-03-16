import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Customer, Order, Product} from "../../model/model";

@Component({
  selector: 'app-order-form',
  template: `
    <div class="border shadow-xl rounded-xl container mx-auto p-10 mb-10">
      <div class="w-full text-center text-4xl mb-5">
        <h1>Auftragsformular</h1>
      </div>
      <form [formGroup]="this.orderForm" (ngSubmit)="onSubmit()" >
        <div class="flex flex-col gap-2 px-12 mb-10">
          <div class="flex flex-col gap-2" formGroupName="customer">
            <label>Vorname</label>
            <input type="text" formControlName="firstName" required>
            <label>Nachname</label>
            <input type="text" formControlName="lastName" required>
            <label>E-Mail-Adresse</label>
            <input type="email" formControlName="email" required>
            <label>Straße und Hausnummer</label>
            <input type="text" id="street" formControlName="street" required>
            <label>Postleitzahl</label>
            <input type="text" formControlName="postalCode" required>
            <label>Ort</label>
            <input type="text" formControlName="city" required>
            <label>Optional: Telefonnummer</label>
            <input type="text"formControlName="tel">
          </div>
          <label>Auftrag zur Dattenrettung einer: </label>
          <select  formControlName="product" #productSelect required>
            <option *ngFor="let product of products" [value]="product.id">{{product.name}}  {{product.category}}  {{product.price}}€</option>
          </select>
          <ng-container *ngIf="productSelect.value" >
            <label>Ersatzdatenträger zur Abspeicherung: </label>
            <select formControlName="replacement" required>
              <option selected> Sie senden einen eigenen Ersatzspeicher zur Sicherung mit: kostenfrei</option>
              <option>Sicherung auf WD Elements Portable externe Festplatte 500GB: 50,00 EUR</option>
              <option>Sicherung auf WD Elements Portable externe Festplatte 1TB: 60,00 EUR</option>
              <option>Sicherung auf WD Elements Portable externe Festplatte 2TB: 70,00 EUR</option>
              <option>Sicherung auf WD Elements Portable externe Festplatte 4TB: 100,00 EUR</option>
            </select>
          </ng-container>

        </div>
        <div class="flex justify-end">
          <button type="submit"
                  class="border-2 rounded-md p-2 "
                  [ngClass]="{'bg-red-500': !orderForm.valid}"
                  [disabled]="!orderForm.valid">{{orderForm.valid ? "Auftrag abschicken" : "Füllen sie alle benötigten Felder aus" }}</button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `input.ng-invalid,select.ng-invalid{
      background-color: #ffdddd;
    }
    option{
      background: #fff;
    }`
  ]
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;
  @Input() products: Product[];
  order: Order;
  constructor(private fb: FormBuilder) { }
  @Output() orderOutput: EventEmitter<Order> = new EventEmitter() ;
  ngOnInit(): void {

    this.orderForm = this.fb.group({
      customer: this.fb.group({
        firstName : ['', Validators.required],
        lastName : [''],
        tel : [''],
        email :  [''],
        postalCode: ['', Validators.pattern("^[0-9]*$")],
        city : [''],
        street :  [''],

      }),
      product : [''],
      replacement : [''],
    });
  }
  onSubmit(): void{
    this.order = (this.orderForm.getRawValue() as Order)
    this.order.product = this.products.find(product => product.id == this.orderForm.get('product').value)
    this.orderOutput.emit(this.order);
  }
}
