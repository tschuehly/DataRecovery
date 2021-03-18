import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-object-edit',
  template: `
    <div>
      <h1 class="text-center text-2xl mb-5">ID:  {{inputObject.id}}</h1>
      <div class="grid grid-cols-1 text-lg gap-4">
        <form (ngSubmit)="outObject.emit(inputObject)" class="mx-auto text-center">
          <ng-container *ngFor="let inputField of inputDef">
            <label>{{inputField.label}}
              <ng-container [ngSwitch]="inputField.type">
                <div *ngSwitchCase="'datetime-local'">
                  <input class="block mt-2 w-full" type="datetime-local"
                         [ngModel]="inputObject[inputField.key] | date:'yyyy-MM-ddTHH:mm'"
                         (ngModelChange)="inputObject[inputField.key] = $event" [ngModelOptions]="{standalone: true}">
                </div>
                <div *ngSwitchCase="'object'">
                  <app-object-edit [inputObject]="inputObject[inputField.key]"></app-object-edit>
                </div>
                <div *ngSwitchDefault>
                  <input [(ngModel)]="inputObject[inputField.key]" [ngModelOptions]="{standalone: true}"
                         class="block mt-2 w-full" [type]="inputField.type">
                </div>
              </ng-container>
            </label>
          </ng-container>
          <div *ngIf="edit" class="flex justify-between mt-6">
            <button type="submit" class="border-2 rounded-md p-2 border-black">Speichern</button>
            <button (click)="close.emit()" class="border-2 rounded-md p-2 bg-red-500 border-black">Schließen
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ObjectEditComponent implements OnInit {
  @Input() inputObject: any;
  @Input() edit;
  @Output() outObject:  EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<void> = new EventEmitter();
  public inputDef: inputDefClass[]
  constructor() { }

  ngOnInit(): void {
    this.inputDef = Object.keys(this.inputObject).map(value => {
      let input: inputDefClass = new inputDefClass()
      input.key = value
      input.label = value.charAt(0).toUpperCase() + value.slice(1)
      console.log(typeof this.inputObject[value])
      switch (typeof this.inputObject[value]){
        case "string":  if(isDate(this.inputObject[value])){
          input.type = "datetime-local"
          console.log(this.inputObject[value] )
          this.inputObject[value] = new Date(this.inputObject[value] + 'Z')
        } else input.type = "text";
          break;
        case "number": input.type =  "number";
          break;
        case "object": input.type =  "object";
          break;

      }
      return input
    }).filter(input => input.key !== "id")
    console.log(this.inputDef)
  }
}
class inputDefClass{
  key: string
  type: string
  label: string
}
function isDate(d) {
  const re = /^([0-9]{4})-([0-1][0-9])-([0-3][0-9])T([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$/;
  return re.test(d);
}
