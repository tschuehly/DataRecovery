import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Order } from '../../../model/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracking',
  template: `
    <div class="container mx-auto p-20">
      <div class="border shadow-xl px-14 py-10" *ngIf="!order">
        <h1 class="text-4xl text-center mb-5">
          Aktuellen Status der Datenrettung erfragen
        </h1>
        <form
          class="grid gap-4"
          [formGroup]="trackingForm"
          (ngSubmit)="onSubmit()"
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
              type="submit"
              class="border-2 rounded-md p-2 "
              [ngClass]="{ 'bg-red-500': !trackingForm.valid }"
              [disabled]="!trackingForm.valid"
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
      <div *ngIf="order" class="border shadow-xl px-14 py-10">
        <app-order-details [order]="order"></app-order-details>
      </div>
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
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const trackingId = this.route.snapshot.paramMap.get('trackingId');
    const postalCode = this.route.snapshot.paramMap.get('postalCode');
    this.trackingForm = this.fb.group({
      trackingId: [trackingId],
      postalCode: [postalCode, Validators.pattern('^[0-9]*$')],
    });
    if (trackingId && postalCode) {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    const params = new HttpParams()
      .append('trackingId', this.trackingForm.get('trackingId').value)
      .append('postalCode', this.trackingForm.get('postalCode').value);
    this.http
      .get('api/order/tracking', { params })
      .subscribe((order: Order) => {
        this.order = order;
      });
  }
}
