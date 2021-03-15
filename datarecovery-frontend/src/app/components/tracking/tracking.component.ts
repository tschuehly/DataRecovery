import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-tracking',
  template: `
    <div class="container mx-auto p-20">
      <div class="border shadow-xl px-14 py-10">
        <h1 class="text-4xl text-center mb-5">Aktuellen Status der Datenrettung erfragen</h1>
        <form class="grid gap-4" [formGroup]="trackingForm" (ngSubmit)="onSubmit()">
          <label>TrackingID:
            <input formControlName="trackingId" class="block mt-2 w-full" type="text" required>
          </label>
          <label>Postleitzahl:
            <input formControlName="postalCode" class="block mt-2 w-full" type="text" required>
          </label>
          <div class="mt-6 flex justify-end">
            <button type="submit"
                    class="border-2 rounded-md p-2 "
                    [ngClass]="{'bg-red-500': !trackingForm.valid}"
                    [disabled]="!trackingForm.valid">{{trackingForm.valid ? "Status erfragen" : "Füllen sie alle benötigten Felder aus" }}</button>
          </div>
        </form>

      </div>

    </div>
  `,
  styles: [
    `input.ng-invalid,select.ng-invalid{
      background-color: #ffdddd;
    }
    option{
      background: #fff;
    }`
  ]
})
export class TrackingComponent implements OnInit {
  trackingForm: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.trackingForm = this.fb.group({
      trackingId: [''],
      postalCode: ['', Validators.pattern("^[0-9]*$")]
    })
  }

  onSubmit() {
    let params = new HttpParams().append('trackingId',this.trackingForm.get('trackingId').value)
    .append('postalCode',this.trackingForm.get('postalCode').value)
    this.http.get('http://localhost:8080/order/tracking',{params: params}).subscribe(data => {
      console.log(data)
    })
  }
}
