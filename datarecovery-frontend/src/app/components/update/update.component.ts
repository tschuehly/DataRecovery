import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Order, Update} from '../../model/model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-update',
  template: `
    <div class="flex flex-col">
      <h1 class="text-2xl">Neues Update erstellen</h1>
      <label *ngFor="let question of this.order.product.category.questions">
        {{question}}
        <input type="radio" (click)="addQuestion(question,'Ja')" name="question" > Ja
        <input type="radio" (click)="addQuestion(question,'Nein')" name="question"> Nein
      </label>
      <form [formGroup]="updateForm" enctype="multipart/form-data">
        <label>Beschreibung
          <textarea class="block mt-2 w-96 h-96" formControlName="description"></textarea></label>
        <div class="flex flex-col my-4" *ngFor="let picture of pictureDetails.controls; let i = index">
          <label>Bildtitel
            <input [formControl]="picture" type="text">
          </label>
          <label>
            <input class="block mt-2 w-full" type="file" (change)="onFileChange($event,i)">
          </label>
        </div>
        <button class="button-primary" (click)="addImage()">Bild hinzufügen</button>
        <button class="button-primary" (click)="addUpdateToOrder()">Update speichern</button>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class UpdateComponent implements OnInit {
  @Input() order: Order;
  @Output() updatedOrder: EventEmitter<Order> = new EventEmitter<Order>();
  updateForm = new FormGroup({
    description: new FormControl('')
  });
  pictureDetails = new FormArray([]);
  files: File[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  addUpdateToOrder(): void{
    console.log(this.files);
    const updateData = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      if (this.pictureDetails.controls[i].value === ''){
        updateData.append('pictures', this.files[i], this.files[i].name );
      }else {
        updateData.append('pictures', this.files[i], this.pictureDetails.controls[i].value );
      }
    }
    updateData.append('update', JSON.stringify((this.updateForm.getRawValue() as Update)) );
    this.http.post('api/order/addUpdate/' + this.order.id, updateData ).subscribe((order: Order) => {
      this.updatedOrder.emit(order);
    });

  }

  addImage(): void{
    console.log('addPicture');
    this.pictureDetails.push(new FormControl(''));
  }

  onFileChange($event: Event, i: number): void {
    this.files.push(($event.target as HTMLInputElement).files[0]);
  }

  addQuestion(question: string, answer: string): void {
    const desc = this.updateForm.controls.description.value;
    const qText =  question + ' : ' + answer;
    const newDesc = desc ? desc + '\n' + qText : qText;
    this.updateForm.controls.description.setValue(newDesc);

  }
}
