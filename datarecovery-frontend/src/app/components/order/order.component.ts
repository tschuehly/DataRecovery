import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../model/model';

@Component({
  selector: 'app-order',
  template: `
    <div class="flex container mx-auto h-full my-10">
      <div class="m-auto" *ngIf="!editOrder">
        <h1 class="text-2xl text-center mb-10">Bestellungsübersicht</h1>
        <table class="border table-auto mx-auto">
          <thead>
          <th class="border px-2 py-1">ID</th>
          <th class="border px-2 py-1">Produkt</th>
          <th class="border px-2 py-1">Kunde</th>
          <th class="border px-2 py-1">Datum</th>
          <th class="border px-2 py-1">Status</th>
          <th class="border px-2 py-1">Edit</th>
          </thead>
          <tbody>
          <tr *ngFor="let order of orders">
            <td class="border p-2">{{order.id}}</td>
            <td class="border p-2">{{order.product.category.name}} {{order.product.name}}</td>
            <td class="border p-2">{{order.customer.firstName}} {{order.customer.lastName}}</td>
            <td class="border p-2">{{order.orderDate | date:'d.M.y H:m':'+0200'}}</td>
            <td class="border p-2">{{order.trackingState}}</td>
            <td class="border pl-2">
              <button (click)="editOrder = order">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit"
                     width="28" height="28" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                     stroke-linejoin="round">
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
      </div>
      <div *ngIf="editOrder" class="m-auto border shadow-xl px-14 py-10">
        <app-order-details *ngIf="!createUpdate"
                           [order]="editOrder"
                           [edit]="true"
                           (editOrder)="updateOrderState($event)"
                           (close)="editOrder = null"
                           (addUpdate)="createUpdate = true"></app-order-details>
        <ng-container *ngIf="createUpdate">
          <app-update [order]="editOrder" (updatedOrder)="editOrder = $event; createUpdate = false"></app-update>
        </ng-container>
        <!-- <app-object-edit (outObject)="updateOrderState($event)" [inputObject]="editOrder" ></app-object-edit>-->
      </div>
    </div>
  `,
  styles: []
})
export class OrderComponent implements OnInit {
  orders: Order[];
  editOrder: Order;
  createUpdate = false;
  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get('api/order').subscribe((orders: Order[]) => {
      this.orders = orders;
    });

  }

  updateOrderState(editOrder: Order): void {
    console.log(editOrder);
    this.http.post('api/order/updateStatus', editOrder).subscribe((order: Order) => {
      this.updateOrders(order);
    });
    this.editOrder = null;
  }

  updateOrders(order: Order):void {
    this.orders.map( o => o.id === order.id);
  }
}
