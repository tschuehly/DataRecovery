import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, orderStateEnum } from '../../../model/model';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  template: `
    <div class="container mx-auto h-full my-10">
      <div class="m-auto" *ngIf="!editOrder">
        <div class="flex mb-10 flex-col gap-4 ">
          <input
            class="w-full"
            type="text"
            [formControl]="searchFilter"
            placeholder="Filter nach Bestellungen"
          />
          <div class="flex flex-row flex-wrap gap-4">
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.orderReceived])"
            >
              Erwartet [{{ getCountByTrackingState(oState.orderReceived) }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.parcelReceived])"
            >
              Paket eingegangen [{{
                getCountByTrackingState(oState.parcelReceived)
              }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.firstAnalysis])"
            >
              Erste Analyse [{{
                getCountByTrackingState(oState.firstAnalysis)
              }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.orderedFirstPartDispenser])"
            >
              Bestellung erster Teilespender [{{
                getCountByTrackingState(oState.orderedFirstPartDispenser)
              }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.orderedSecondPartDispenser])"
            >
              Bestellung zweiter Teilespender [{{
                getCountByTrackingState(oState.orderedSecondPartDispenser)
              }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.orderedThirdPartDispenser])"
            >
              Bestellung Dritter Teilespender [{{
                getCountByTrackingState(oState.orderedThirdPartDispenser)
              }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.readingMemory])"
            >
              Speicher wird ausgelesen [{{
                getCountByTrackingState(oState.readingMemory)
              }}]
            </button>
            <button class="border-2 p-2" (click)="getOrders([oState.reRead])">
              Speicher wird erneut ausgelesen [{{
                getCountByTrackingState(oState.reRead)
              }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="getOrders([oState.savingData])"
            >
              Abspeicherung Dateien [{{
                getCountByTrackingState(oState.savingData)
              }}]
            </button>
            <button class="border-2 p-2" (click)="getOrders([oState.storage])">
              Einlagerung [{{ getCountByTrackingState(oState.storage) }}]
            </button>
            <button
              class="border-2 p-2"
              (click)="
                getOrders([
                  oState.parcelReturned,
                  oState.success,
                  oState.failure,
                  oState.legacyComplete
                ])
              "
            >
              Archiv [{{ getArchiveCount() }}]
            </button>
          </div>
        </div>
        <table class="border table-auto mx-auto">
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
            <tr *ngFor="let order of filteredOrders$ | async">
              <td class="border p-2">{{ order.id }}</td>
              <td class="border p-2">
                {{ order.orderProduct.category.name }}
                {{ order.orderProduct.name }}
              </td>
              <td class="border p-2">
                {{ order.customer.firstName }} {{ order.customer.lastName }}
              </td>
              <td class="border p-2">
                {{ order.orderDate | date: 'd.M.y H:mm':'+0400' }}
              </td>
              <td
                class="border p-2 {{
                  getDaysTillDeadline(order.deadline) < 7 && order.deadline
                    ? 'bg-red-' +
                      (700 - getDaysTillDeadline(order.deadline) * 100)
                    : ''
                }}"
              >
                {{ getDaysTillDeadline(order.deadline) }}
              </td>

              <td
                class="border p-2 {{
                  order.completionDate > order.deadline ? 'bg-purple-500' : ''
                }}"
              >
                {{ getDaysTillCompletion(order.completionDate) }}
              </td>
              <td class="border p-2">{{ order.trackingState }}</td>
              <td class="border pl-2">
                <button (click)="editOrder = order">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                    />
                    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                    <line x1="16" y1="5" x2="19" y2="8" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div *ngIf="editOrder" class="m-auto border shadow-xl px-14 py-10">
        <app-order-details
          *ngIf="!createUpdate"
          [order]="editOrder"
          [edit]="true"
          (editOrder)="updateOrderState($event)"
          (deleteOrder)="deleteOrder($event)"
          (closeDetail)="editOrder = null"
          (addUpdate)="createUpdate = true"
        ></app-order-details>
        <ng-container *ngIf="createUpdate">
          <app-update
            [order]="editOrder"
            (updatedOrder)="editOrder = $event; createUpdate = false"
          ></app-update>
        </ng-container>
        <!-- <app-object-edit (outObject)="updateOrderState($event)" [inputObject]="editOrder" ></app-object-edit>-->
      </div>
    </div>
  `,
  styles: [],
})
export class OrderComponent implements OnInit {
  orders: Order[];
  orders$: Observable<Order[]>;
  filteredOrders$: Observable<Order[]>;
  editOrder: Order;
  createUpdate = false;
  currentOrderView = [orderStateEnum.orderReceived];
  dateNow: Date;
  searchFilter: FormControl;
  searchFilter$: Observable<string>;
  oState = orderStateEnum;
  trackingStateCount: Map<string, number> = new Map();
  constructor(private http: HttpClient, private router: Router) {
    this.dateNow = new Date();
  }

  ngOnInit(): void {
    this.getOrders(this.currentOrderView);

    this.http.get('api/order/info').subscribe((data: Array<Array<any>>) => {
      data.map((info) => {
        this.trackingStateCount.set(info[1], info[0]);
      });
    });
  }
  getArchiveCount() {
    try {
      return (
        this.trackingStateCount.get(this.oState.parcelReceived) +
        this.trackingStateCount.get(this.oState.success) +
        this.trackingStateCount.get(this.oState.failure) +
        this.trackingStateCount.get(this.oState.legacyComplete)
      );
    } catch (e) {
      return 0;
    }
  }

  getCountByTrackingState(state: string): number {
    try {
      return this.trackingStateCount.get(state);
    } catch (e) {
      return 0;
    }
  }

  getOrders(stateList: string[]): void {
    let stateString = '?state=' + stateList.join('&state=');
    this.filteredOrders$ = (
      this.http.get('api/order/state' + stateString) as Observable<Order[]>
    ).pipe(
      catchError((error) => {
        console.error('error loading the orders', error);
        this.router.navigate(['/admin/login']);
        return of();
      })
    );

    this.searchFilter = new FormControl('');
    this.searchFilter$ = this.searchFilter.valueChanges.pipe(startWith(''));

    this.searchFilter.valueChanges.subscribe((x) => {
      console.log(x);
      if (x !== '') {
        this.filteredOrders$ = (
          this.http.get('api/order/search' + '?searchTerm=' + x) as Observable<
            Order[]
          >
        ).pipe(
          catchError((error) => {
            console.error('error loading the orders', error);
            return of();
          })
        );
      } else {
        this.filteredOrders$ = this.filteredOrders$.pipe(
          map((orders) =>
            orders.sort((a, b) => {
              if (b.deadline == null && a.deadline == null) {
                if (b.orderDate > a.orderDate) {
                  return 1;
                }
                if (b.orderDate < a.orderDate) {
                  return -1;
                }
              }
              if (b.deadline == null) {
                return -1;
              }
              if (b.deadline < a.deadline) {
                return 1;
              }
              if (b.deadline > a.deadline) {
                return -1;
              }
            })
          )
        );
      }
    });
  }

  updateOrderState(editOrder: Order): void {
    this.http
      .post('api/order/updateStatus', editOrder)
      .subscribe((order: Order) => {
        console.log(order);
        this.updateOrders(order);
      });
    this.editOrder = null;
  }

  updateOrders(order: Order): void {
    this.filteredOrders$ = this.filteredOrders$.pipe(
      map((orderArray) =>
        orderArray.map((o) => {
          if (o.id === order.id) {
            return order;
          } else {
            return o;
          }
        })
      )
    );
  }

  deleteOrder(order: Order): void {
    this.http.delete('api/order/' + order.id).subscribe((_) => {
      this.orders = this.orders.filter((o) => o.id !== order.id);
    });
    this.editOrder = null;
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
