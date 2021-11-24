import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../model/model';
import {Router} from '@angular/router';
import {OrderInfoDTO} from '../../dto/dto';
import {catchError, combineLatest, map, Observable, of, startWith} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-order',
  template: `
    <div class="container mx-auto h-full my-10">
      <div class="m-auto" *ngIf="!editOrder">
        <div class="flex mb-10">
          <h2 class="text-3xl text-center flex-1" *ngIf="currentOrderView === 'awaited'"> Erwartete Bestellungen</h2>
          <h2 class="text-3xl text-center flex-1" *ngIf="currentOrderView === 'active'">  Aktive Bestellungen </h2>
          <h2 class="text-3xl text-center flex-1" *ngIf="currentOrderView === 'archive'"> Archivierte Bestellungen </h2>
        </div>
        <div class="flex mb-10 justify-between ">
          <input class="w-64" type="text" [formControl]="searchFilter" placeholder="Filter nach Bestellungen">
          <div class="space-x-2">
            <button class="border-2 p-2" [disabled]="page === 0"
                    (click)="page = page - 1; getOrders(currentOrderView, this.page)"><</button>
            <span>{{page}}</span>
            <button class="border-2 p-2" (click)="page = page + 1; getOrders(currentOrderView, this.page)">></button>

            <button class="border-2 p-2" (click)="switchView('awaited')">Erwartet [{{orderInfoDTO?.awaitedCount}}]</button>
            <button class="border-2 p-2" (click)="switchView('active')">In Bearbeitung [{{orderInfoDTO?.activeCount}}]</button>
            <button class="border-2 p-2" (click)="switchView('archive')">Archiv [{{orderInfoDTO?.archivedCount}}]</button>

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
            <td class="border p-2">{{order.id}}</td>
            <td class="border p-2">{{order.orderProduct.category.name}} {{order.orderProduct.name}}</td>
            <td class="border p-2">{{order.customer.firstName}} {{order.customer.lastName}}</td>
            <td class="border p-2">{{order.orderDate | date:'d.M.y H:mm':'+0400'}}</td>
            <td
              class="border p-2 {{(getDaysTillDeadline(order.deadline) < 7 && order.deadline) ? 'bg-red-'+(700 - getDaysTillDeadline(order.deadline) * 100):''}}">{{getDaysTillDeadline(order.deadline)}}</td>

            <td
              class="border p-2 {{order.completionDate > order.deadline  ? 'bg-purple-500':''}}">{{getDaysTillCompletion(order.completionDate)}}</td>
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
                           (deleteOrder)="deleteOrder($event)"
                           (closeDetail)="editOrder = null"
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
  orders$: Observable<Order[]>
  filteredOrders$: Observable<Order[]>;
  editOrder: Order;
  createUpdate = false;
  currentOrderView = 'active';
  page = 0;
  dateNow: Date;
  orderInfoDTO: OrderInfoDTO;
  searchFilter: FormControl;
  searchFilter$: Observable<string>;

  constructor(private http: HttpClient, private router: Router) {
    this.dateNow = new Date();
  }


  ngOnInit(): void {
    this.getOrders(this.currentOrderView, this.page);
  }

  getOrders(status: string, page: number): void {
    this.orders$ = (this.http.get('api/order/' + status + '?page=' + page) as Observable<Order[]>).pipe(
      catchError((error) => {
        console.error('error loading the orders', error);
        this.router.navigate(['/login']);
        return of();
      })
    );

    this.searchFilter = new FormControl('');
    this.searchFilter$ = this.searchFilter.valueChanges.pipe(startWith(''));
    this.filteredOrders$ = combineLatest([this.orders$,this.searchFilter$])
      .pipe(map(([orders, filterString]) =>
      orders.filter(order =>
        order.customer.lastName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
        ||
        order.customer.firstName.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
        ||
        order.id.toString().indexOf(filterString) !== -1
      ).sort((a, b) => {
        if (b.deadline == null && a.deadline == null){
          if (b.orderDate > a.orderDate) { return 1; }
          if (b.orderDate < a.orderDate) { return -1; }
        }
        if (b.deadline == null) { return -1; }
        if (b.deadline < a.deadline) { return 1; }
        if (b.deadline > a.deadline) { return -1; }
      })
    ));

    this.http.get('api/order/info').subscribe((orderInfoDTO: OrderInfoDTO) => {
      this.orderInfoDTO = orderInfoDTO;
    });

  }

  updateOrderState(editOrder: Order): void {
    this.http.post('api/order/updateStatus', editOrder).subscribe((order: Order) => {
      console.log(order);
      this.updateOrders(order);
    });
    this.editOrder = null;
  }

  updateOrders(order: Order): void {
    this.filteredOrders$ = this.filteredOrders$.pipe(map(orderArray =>
    orderArray.map(o => {
      if (o.id === order.id){
        return order;
      }else {
        return o;
      }
    })));
  }

  deleteOrder(order: Order): void {
    this.http.delete('api/order/' + order.id).subscribe(_ => {
      this.orders = this.orders.filter(o => o.id !== order.id);
    });
    this.editOrder = null;

  }

  switchView(status: string): void {
    this.page = 0;
    this.currentOrderView = status;
    this.getOrders(status, this.page);
  }

  getDaysTillDeadline(deadline: Date): string {
    if (deadline == null) {
      return '';
    }
    const milSeconds = Date.parse(deadline.toString()) - this.dateNow.getTime();
    const timeToDeadline = milSeconds / (1000 * 3600 * 24);
    return Math.floor(timeToDeadline).toString();
  }

  getDaysTillCompletion(completionDate: Date): number {
    if (completionDate == null){
      return null;
    }
    const days = new Date(completionDate).getTime() - new Date().getTime();
    return Math.floor(days / (1000 * 3600 * 24));
  }

}
