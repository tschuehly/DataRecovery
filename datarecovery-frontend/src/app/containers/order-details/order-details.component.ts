import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, orderStateEnum, Picture, Update} from '../../model/model';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
          <span>Produkt: {{order.product.category.name}} {{order.product.name}} </span>
          <span>Preis: {{order.product.price}} €</span>
          <span>TrackingId: {{order.trackingId}} €</span>
        </div>
        <div *ngIf="!edit" class="col-span-2 text-center text-2xl font-bold mt-6">Status: {{order.trackingState}}</div>
        <ng-container *ngIf="edit">
          <div class="col-span-2 text-center mt-6">
            <select [formControl]="orderTrackingState">
              <option *ngFor="let state of orderState | keyvalue" [ngValue]="state.value">{{state.value}}</option>
            </select>
          </div>
          <div class="col-span-2 flex justify-between mt-6">
            <button (click)="saveOrder()" class="border-2 rounded-md p-2 border-black">Speichern</button>
            <button (click)="addUpdate.emit(order)" class="border-2 rounded-md p-2 border-black">Update hinzufügen</button>
            <button (click)="close.emit()" class="border-2 rounded-md p-2 bg-red-500 border-black">Schließen</button>
          </div>
        </ng-container>
        <div *ngFor="let update of order.updates" class="col-span-2 border-2 rounded-md p-4">
          <h2 class="text-2xl">Update: {{update.id}}</h2>
          <span>Beschreibung:</span>
          <p class="text-xl whitespace-pre-wrap border p-2 my-2">{{update.description}}</p>
          <span *ngIf="update.pictures.length != 0">Klicken um die Bilder zu vergrößern</span>
          <div class="flex flex-row flex-wrap mt-2">
            <div *ngFor="let pic of update.pictures">
              <label  class="cursor-pointer" (click)="togglePictureZoom(pic)">
                <img class="mr-4"
                     [ngClass]="pic['zoomed'] ? 'h-96' : 'h-32'"
                     src="{{'data:'+pic.type+';base64,'+pic.data}}"
                     [alt]="pic.name">{{pic.name}}
              </label>

            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class OrderDetailsComponent implements OnInit {
  orderState = orderStateEnum;
  @Input() order: Order;
  @Input() edit: boolean;
  orderTrackingState: FormControl;
  update: Update;
  pictureZoomed = false;
  @Output() editOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() addUpdate: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.orderTrackingState = new FormControl(this.order.trackingState);
    if(this.update?.pictures){
      this.update.pictures.map(pic => {
        return {...pic, zoomed: false};
      });
    }
  }

  saveOrder(): void {
    this.order.trackingState = this.orderTrackingState.value;
    this.editOrder.emit(this.order);
  }

  togglePictureZoom(pic: Picture) {
    pic['zoomed'] = !pic['zoomed'];
  }
}
