import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, orderStateEnum, Update} from '../../model/model';
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
            <button (click)="close.emit()" class="border-2 rounded-md p-2 bg-red-500 border-black">Schließen</button>
          </div>
          <form [formGroup]="updateForm" (ngSubmit)="addUpdateToOrder()" enctype="multipart/form-data">
            <label>Beschreibung
              <input type="text" class="block mt-2 w-full" formControlName="description"></label>
            <button class="button-primary" (click)="addImage()">Add Image</button>
            <div formArrayName="pictures" *ngFor="let picture of pictures.controls; let i = index">
              <label>Lade Bild hoch
                <input [formControlName]="i" type="file" (change)="onFileChange($event,i)" ></label>
            </div>
            <button class="button-primary" type="submit">Add Update</button>
          </form>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class OrderDetailsComponent implements OnInit {
  orderState = orderStateEnum;
  @Input() order: Order;
  @Input() edit: boolean;
  orderTrackingState: FormControl;
  updateForm = new FormGroup({
    description: new FormControl(),
    pictures: new FormArray([])
  });
  files: File[] = [];
  pictures = this.updateForm.get('pictures') as FormArray;
  preview: string;
  update: Update;
  @Output() editOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() addUpdate: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() close: EventEmitter<void> = new EventEmitter();
  constructor(private fb: FormBuilder,private http: HttpClient) {
  }

  ngOnInit(): void {
    this.orderTrackingState = new FormControl(this.order.trackingState);


  }
  addImage(): void{
    console.log('addPicture');
    (this.updateForm.get('pictures') as FormArray).push(new FormControl(''));

  }
  addUpdateToOrder(): void{
    console.log(this.files);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.files[0], this.files[0].name);
    this.http.post('api/order/addUpdate/' + this.order.id, uploadImageData ).subscribe(data => console.log(data));
  }
  getPicturesForm(): FormArray{
    return this.updateForm.get('pictures') as FormArray;
  }

  saveOrder(): void{
    this.order.trackingState = this.orderTrackingState.value;
    this.editOrder.emit(this.order);
  }

  onFileChange($event: Event, i: number) {
    this.files.push(($event.target as HTMLInputElement).files[0]);
  }
}
