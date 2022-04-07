import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, orderStateEnum, Picture, Update} from '../../model/model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-order-details',
  template: `
    <div>
      <div class="flex  mb-5 ">
        <h1 class="text-center text-2xl flex-1">Bestellung vom {{order.orderDate | date:'d.M.y H:mm' }}</h1>
        <button (click)="closeDetail.emit()">
          <img alt="close" src="/assets/x.svg">
        </button>
      </div>
      <div class="grid grid-cols-2 text-lg gap-4">
        <div *ngIf="order.customer as c" class="flex flex-col">
          <span>{{c.firstName}} {{c.lastName}}</span>
          <a class="font-semibold" href="mailto:{{c.email}}">{{c.email}}</a>
          <span>{{c.street}}</span>
          <span>{{c.postalCode}} {{c.city}}</span>
          <span>{{c.tel}}</span>
        </div>
        <div class="flex flex-col text-right">
          <span>Produkt: {{order.orderProduct.category.name}} {{order.orderProduct.name}} </span>
          <span>Preis: {{order.orderProduct.price | number : '.2':'de' }} €</span>
          <span>Ersatz: {{order.replacement}}</span>
          <span *ngIf="order.monthlyPayment === 1">Keine Ratenzahlung</span>
          <span *ngIf="order.monthlyPayment === 2">2 monatige Ratenzahlung</span>
          <span *ngIf="order.monthlyPayment === 6">6 monatige Ratenzahlung</span>

        </div>
        <div class="col-span-2 flex justify-between" *ngIf="!edit">
          <ng-container *ngIf="order.deadline else noDeadline">
            <span>Deadline: {{order.deadline | date: 'd.M.y':'+0400'}}</span>
          </ng-container>
          <ng-template #noDeadline>Keine Deadline angegeben</ng-template>

          <span>Vorrausichtliche Bearbeitungsdauer: </span>
          <ng-container *ngIf="daysToCompletion as d">
            <span *ngIf="d < 3">Weniger als 3 Tage</span>
            <span *ngIf="d < 6 && d > 2">3 bis 5 Tage</span>
            <span *ngIf="d < 8 && d > 5">6 bis 7 Tage</span>
            <span *ngIf="d < 15 && d > 7">Ein bis zwei Wochen</span>
            <span *ngIf="d < 30 && d > 14">Zwei bis vier Wochen</span>
            <span *ngIf="30 < d">Über vier Wochen</span>
          </ng-container>
        </div>
        <div class="col-span-2" *ngIf="edit">
          <div class="flex flex-col space-y-4 align-middle">
            <label class="flex">
              <div class="w-80">
                    <span *ngIf="order.deadline else noDeadline">
                      Deadline:
                      {{order.deadline | date: 'd.M.y':'+0400'}}
                    </span>
                <ng-template #noDeadline>
                  <span>Keine Deadline</span>
                </ng-template>
              </div>
              <input class="w-48 text-black" type="date" [(ngModel)]="order.deadline"/>
            </label>
            <label class="flex">
              <div class="w-80">
                Fertig vorrausichtlich:
                <span>{{order.completionDate | date: 'd.M.y':'+0400'}}</span>
              </div>
              <div>
                <input class="w-48" type="number" [(ngModel)]="daysToCompletion">
                <span class="-ml-28">Tage</span>
              </div>
            </label>

          </div>
        </div>
        <div class="col-span-2" *ngIf="order.note">
          <h2 class="font-semibold">Zusätzliche Anmerkung:</h2>
          <span>{{order.note?.trim()}}</span>
        </div>
        <div *ngIf="!edit" class="col-span-2 text-center mt-6">
          <h3 class="text-2xl font-bold">Status: {{order.trackingState}}</h3>


        </div>
        <ng-container *ngIf="edit">

          <div class="col-span-2 mt-6">
            <span class="mr-4">{{order.trackingState}}</span>
            <select [formControl]="orderTrackingState">
              <option *ngFor="let state of orderStateList"
                      [ngValue]="state[1]">{{state[1]}}</option>
            </select>
          </div>
          <div class="col-span-2 flex justify-between mt-6">
            <button class="border-2 rounded-md p-2 bg-red-500 border-black" (click)="deleteConfirm = true">
              <img alt="delete" src="/assets/trash-2.svg">
            </button>
            <button (click)="addUpdate.emit(order)" class="border-2 rounded-md p-2 border-black">Update
              hinzufügen
            </button>
            <button (click)="saveOrder()" class="border-2 rounded-md p-2 border-black">Speichern</button>
          </div>
        </ng-container>
        <div *ngIf="deleteConfirm" class="mt-10 flex justify-end col-span-2">
          <button (click)="deleteOrder.emit(order)" class="border-2 rounded-md p-2 bg-red-500 border-black">
            Willst du sicher diese Bestellung löschen?
          </button>
        </div>
        <div class="col-span-2">
          <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

            <ng-container *ngFor="let update of order.updates; let first = first ;let last = last; let index = index;" class="">
              <div class="flex md:contents">
                <div class="col-end-2 mr-10 md:mx-auto relative">
                  <div class="h-full w-7 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-main pointer-events-none"></div>
                  </div>
                  <div class="w-7 h-7 absolute top-1/2 -mt-3 rounded-full bg-gray-main shadow text-center">{{order.updates.length - index}}</div>
                </div>
                <div class="bg-gray-main col-start-2 col-span-10 p-4 rounded-xl my-4 mr-auto shadow-md">
                  <h3 class="font-semibold text-lg my-1">{{update.date | date:'d.M.y'}} {{update.title}}:</h3>
                  <p class="leading-tight text-justify w-full">

                  </p>
                  <ng-container [ngSwitch]="update.title">
                    <p *ngSwitchCase="orderStateEnum.firstAnalysis">
                      In der ersten Analyse wird Ihr Speicher nun nach dem Ursprung des Fehlers untersucht.<br>
                      So können beispielsweise Schleifspuren auf einem Schreib-/Lesekopf einen Headcrash nachweisen und uns
                      Hinweise über den
                      Zustand der Oberfläche geben.<br/>
                    </p>
                    <p *ngSwitchCase="orderStateEnum.orderedFirstPartDispenser">
                      Die Reparatur Ihres Speichers benötigt einen kompatiblen Teilespender, um Datenzugriff zu ermöglichen.
                      <br/>
                      Diesen finde Ich oftmals von Privatpersonen wie z.B. auf Ebay.<br/>
                    </p>
                    <p *ngSwitchCase="orderStateEnum.orderedSecondPartDispenser">
                      Der vorherige Teilespender war entweder nicht kompatibel oder nahm zu schnell neuen Schaden.<br/>
                      Es wird nun mit einem zweiten Teilespender ein neuer Versuch gestartet.<br/>
                    </p>
                    <p *ngSwitchCase="orderStateEnum.orderedThirdPartDispenser">
                      Der vorherige Teilespender war entweder nicht kompatibel oder nahm zu schnell neuen Schaden.<br/>
                      Es wird nun mit einem dritten Teilespender der letzte Versuch gestartet.<br/>
                    </p>
                    <p *ngSwitchCase="orderStateEnum.readingMemory">
                      Es besteht Datenzugriff auf Ihren Speicher. Dieser wird nun Sektor für Sektor ausgelesen.<br/>
                      Bitte melden Sie sich falls es Dateien gibt die priorisiert werden sollen.<br/>
                    </p>
                    <p *ngSwitchCase="orderStateEnum.savingData">
                      Die geretteten Dateien werden nun auf den Ersatzdatenträger abgespeichert.<br/>
                    </p>
                    <p *ngSwitchCase="orderStateEnum.reRead">
                      Der erste Lesedurchgang beinhaltet Fehler.<br/>
                      Es wird nun versucht durch erneute Lesezugriffe diese Fehler zu reduzieren oder bestenfalls vollständig zu
                      beseitigen.
                    </p>
                    <p *ngSwitchDefault>
                      {{update.description}}
                    </p>
                  </ng-container>
                  <span *ngIf="update?.pictures?.length !== 0">Klicken um die Bilder zu vergrößern</span>
                  <div class="flex flex-row flex-wrap mt-2">
                    <div *ngFor="let pic of update.pictures">
                      <label class="cursor-pointer" (click)="togglePictureZoom(pic)">
                        <img class="mr-4"
                             [ngClass]="pic['zoomed'] ? 'h-96' : 'h-32'"
                             src="{{'/api/picture/'+ pic.id}}"
                             [alt]="pic.name">{{pic.name}}
                      </label>

                    </div>
                  </div>
                </div>

              </div>
            </ng-container>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class OrderDetailsComponent implements OnInit {
  orderStateList = Object.entries(orderStateEnum);
  orderStateEnum = orderStateEnum;
  @Input() order: Order;
  @Input() edit: boolean;
  orderTrackingState: FormControl;
  update: Update;
  pictureZoomed = false;
  @Output() editOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() deleteOrder: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() addUpdate: EventEmitter<Order> = new EventEmitter<Order>();
  @Output() closeDetail: EventEmitter<void> = new EventEmitter();
  deleteConfirm: boolean;
  daysToCompletion: number;

  constructor() {

  }

  ngOnInit(): void {
    this.orderTrackingState = new FormControl(this.order.trackingState);
    if (this.order.completionDate) {
      const diff = new Date(this.order.completionDate).getTime() - new Date().getTime();
      this.daysToCompletion = Math.floor(diff / (1000 * 3600 * 24));
    }
    if (this.update?.pictures) {
      this.update.pictures.map(pic => {
        return {...pic, zoomed: false};
      });
    }

    this.order.updates = this.order.updates.sort((u1, u2) => {
      if (u1.date > u2.date) {
        return -1;
      }
    });
  }

  saveOrder(): void {
    this.order.trackingState = this.orderTrackingState.value;
    const date = new Date();
    date.setDate(date.getDate() + this.daysToCompletion);
    this.order.completionDate = date;
    if (this.order.deadline != null) {
      this.order.deadline = new Date(this.order.deadline);

    }
    this.editOrder.emit(this.order);
  }

  togglePictureZoom(pic: Picture): void {
    pic[`zoomed`] = !pic[`zoomed`];
  }

}
