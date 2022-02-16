import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Order, Update} from '../../model/model';
import {HttpClient} from '@angular/common/http';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-update',
  template: `
      <div class="flex flex-col">
          <div class="flex ">
            <h1 class="text-2xl text-center flex-1">Neues Update erstellen</h1>
            <button class="flex-0" (click)="this.updatedOrder.emit(order)">
              <img alt="close" src="/assets/x.svg">
            </button>
          </div>
          <label *ngFor="let question of this.order.orderProduct.category.questions" class="text-center my-4">
              {{question}}
              <input type="radio" (click)="addQuestion(question,'Ja')" name="question"> Ja
              <input type="radio" (click)="addQuestion(question,'Nein')" name="question"> Nein
          </label>
          <form [formGroup]="updateForm" class="text-black my-4" enctype="multipart/form-data">
              <textarea class="block mt-2 w-full h-96 m-auto" formControlName="description"></textarea>
              <div class="flex flex-col my-4" *ngFor="let picture of pictureDetails.controls; let i = index">
                  <label>Bildtitel
                      <input [formControl]="picture" type="text">
                  </label>
                  <label>
                      <input class="block mt-2 w-full" type="file" (change)="onFileChange($event,i)">
                  </label>
              </div>
            <div class="flex justify-between mt-6">
              <button class="border-2 rounded-xl p-2 text-black" (click)="addImage()">Bild hinzufügen</button>
              <button class="border-2 rounded-xl p-2 text-black" (click)="addUpdateToOrder()">Update speichern</button>

            </div>
              </form>
      </div>
  `,
  styles: [
  ]
})
export class UpdateComponent  {
  @Input() order: Order;
  @Output() updatedOrder: EventEmitter<Order> = new EventEmitter<Order>();
  updateForm = new FormGroup({
    description: new FormControl('')
  });
  pictureDetails = new FormArray([]);
  files: File[] = [];
  constructor(private http: HttpClient) { }


  async addUpdateToOrder(): Promise<void>{
    const updateData = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      console.log(this.files[i].size)
      this.files[i] = await this.compressPicture(this.files[i])
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

  compressPicture(file: File): Promise<File>{
    const options = {
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    return imageCompression(file, options)
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
