import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Order } from '../../model/model';
import { ActivatedRoute } from '@angular/router';
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-tracking',
  template: `
    <div class="md:container mx-auto md:py-10">
      <div class="border shadow-xl px-14 py-10" *ngIf="((orders$ | async) == null) && order == null">
        <h1 class="text-4xl text-center mb-5">
          Aktuellen Status der Datenrettung erfragen
        </h1>
        <form
          class="grid gap-4"
          [formGroup]="trackingForm"
        >
          <label
          >TrackingID:
            <input
              formControlName="trackingId"
              class="block mt-2 w-full"
              type="text"
              required
            />
          </label>
          <label
          >Postleitzahl:
            <input
              formControlName="postalCode"
              class="block mt-2 w-full"
              type="text"
              required
            />
          </label>
          <div class="mt-6 flex justify-end">
            <button
              class="border-2 rounded-md p-2 "
              [ngClass]="{ 'bg-red-500': !trackingForm.valid }"
              [disabled]="!trackingForm.valid"
              (click)="onSubmit()"
            >
              {{
              trackingForm.valid
                ? 'Status erfragen'
                : 'Füllen Sie alle benötigten Felder aus'
              }}
            </button>
          </div>
        </form>
      </div>
      <div *ngIf=" ((orders$ | async) == null) && order != null" class="border shadow-xl px-2 md:px-14 py-10">
        <app-order-details [order]="order" (closeDetail)="order = null; this.handleTracking()"></app-order-details>
      </div>
      <table class="border table-auto mx-auto" *ngIf="(orders$ | async) != null">
        <thead>
        <th class="border px-2 py-1">ID</th>
        <th class="border px-2 py-1">Produkt</th>
        <th class="border px-2 py-1">Kunde</th>
        <th class="border px-2 py-1">Orderdatum</th>
        <th class="border px-2 py-1">Deadline</th>
        <th class="border px-2 py-1">Bearbeitungsdauer</th>
        <th class="border px-2 py-1">Status</th>
        <th class="border px-2 py-1">Edit</th>
        </thead>
        <tbody>
        <tr *ngFor="let tableOrder of orders$ | async">
          <td class="border p-2">{{ tableOrder.id }}</td>
          <td class="border p-2">
            {{ tableOrder.orderProduct.category.name }}
            {{ tableOrder.orderProduct.name }}
          </td>
          <td class="border p-2">
            {{ tableOrder.customer.firstName }} {{ tableOrder.customer.lastName }}
          </td>
          <td class="border p-2">
            {{ tableOrder.orderDate | date: 'd.M.y H:mm':'+0400' }}
          </td>
          <td
            class="border p-2 {{
                  getDaysTillDeadline(tableOrder.deadline) < 7 && tableOrder.deadline
                    ? 'bg-red-' +
                      (700 - getDaysTillDeadline(tableOrder.deadline) * 100)
                    : ''
                }}"
          >
            {{ getDaysTillDeadline(tableOrder.deadline) }}
          </td>

          <td
            class="border p-2 {{
                  tableOrder.completionDate > tableOrder.deadline ? 'bg-purple-500' : ''
                }}"
          >
            {{ getDaysTillCompletion(tableOrder.completionDate) }}
          </td>
          <td class="border p-2">{{ tableOrder.trackingState }}</td>
          <td class="border pl-2" (click)="order = tableOrder; orders$ = null">
            Anzeigen
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [
    `
      input.ng-invalid.ng-touched,
      select.ng-invalid.ng-touched {
        background-color: #ffdddd;
      }
      option {
        background: #fff;
      }
    `,
  ],
})
export class TrackingComponent implements OnInit {
  trackingForm: FormGroup;
  order: Order;
  dateNow: Date;
  orders$: Observable<Order[]> = null;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.dateNow = new Date();
  }

  ngOnInit(): void {
    this.handleTracking()
  }

  handleTracking(){
    const trackingId = this.route.snapshot.paramMap.get('trackingId');
    const postalCode = this.route.snapshot.paramMap.get('postalCode');
    this.trackingForm = this.fb.group({
      trackingId: [trackingId],
      postalCode: [postalCode, Validators.pattern('^[0-9]*$')],
    });

    if (trackingId && postalCode) {
      let orderString = localStorage.getItem("orders")
      const currentOrder = {
        "trackingId": trackingId,
        "postalCode":postalCode
      }
      if(orderString != null && JSON.parse(orderString).length > 0){
        let orders = JSON.parse(orderString)
        if(orders.findIndex(order => order.trackingId == trackingId) == -1){
          orders.push(currentOrder)
          localStorage.setItem("orders", JSON.stringify(orders))
        }
        if(orders.length > 1){
          this.getB2BList(orders)
        }else {
          this.getOrderByTrackingIdAndPostalCode(trackingId,postalCode)
        }
      } else {
        this.getOrderByTrackingIdAndPostalCode(trackingId,postalCode);
        console.log("3: "+JSON.stringify(currentOrder))
        localStorage.setItem("orders", "["+JSON.stringify(currentOrder)+"]")
      }
    }
  }

  getB2BList(orders){
    this.orders$ = this.http.post('api/order/trackingB2BList', orders) as Observable<Order[]>

  }

  onSubmit(): void {
    this.getOrderByTrackingIdAndPostalCode(
      this.trackingForm.get('trackingId').value,
      this.trackingForm.get('postalCode').value
      )
  }

  getOrderByTrackingIdAndPostalCode(trackingId, postalCode){
    const params = new HttpParams()
      .append('trackingId', trackingId)
      .append('postalCode', postalCode);
    this.http
      .get('api/order/tracking', { params })
      .subscribe((order: Order) => {
          this.order = order
      });
  }

  getDaysTillDeadline(deadline: Date): number {
    if (deadline == null) {
      return null;
    }
    const milSeconds = Date.parse(deadline.toString()) - this.dateNow.getTime();
    const timeToDeadline = milSeconds / (1000 * 3600 * 24);
    return Math.floor(timeToDeadline);
  }

  getDaysTillCompletion(completionDate: Date): number {
    if (completionDate == null) {
      return null;
    }
    const days = new Date(completionDate).getTime() - new Date().getTime();
    return Math.floor(days / (1000 * 3600 * 24));
  }

}
