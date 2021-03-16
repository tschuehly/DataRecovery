import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../model/model';

@Component({
  selector: 'app-order-details',
  template: `
    <div>
      <h1 class="text-center text-2xl mb-5">Bestellung vom {{order.orderDate | date:'d.M.y H:mm' }}</h1>
      <div class="grid grid-cols-2 text-lg gap-4">
        <div *ngIf="order.customer as c" class="flex flex-col">
          <span>{{c.firstName}} {{c.lastName}}</span>
          <span>{{c.street}}</span>
          <span>{{c.postalCode}} {{c.city}}</span>
        </div>
        <div class="flex flex-col text-right">
          <span>Produkt: {{order.product.category}} {{order.product.name}} </span>
          <span>Preis: {{order.product.price}} €</span>
        </div>
        <div *ngIf="!edit" class="col-span-2 text-center text-2xl font-bold mt-6">Status: {{order.trackingState}}</div>
        <ng-container *ngIf="edit">
          <div class="col-span-2 text-center mt-6">
            <select [(ngModel)]="order.trackingState">
              <option>Auftrag eingegangen</option>
              <option>Paket eingegangen</option>
              <option>Erste Analyse</option>
              <option>Bestellung Ersatzteile</option>
              <option>Reparatur</option>
              <option>Auslesen Speicher</option>
              <option>Abspeicherung Dateien</option>
              <option>Rückversand</option>
            </select>
          </div>
          <div class="col-span-2 flex justify-between mt-6">
            <button (click)="editOrder.emit(order)" class="border-2 rounded-md p-2 border-black">Speichern</button>
            <button (click)="close.emit()" class="border-2 rounded-md p-2 bg-red-500 border-black">Schließen</button>
          </div>
        </ng-container>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: Order;
  @Input() edit: boolean;
  @Output() editOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() close: EventEmitter<void> = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

}
