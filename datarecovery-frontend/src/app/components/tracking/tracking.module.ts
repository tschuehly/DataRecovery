import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';
import { AdminModule } from '../admin/admin.module';
import { OrderDetailsComponent } from '../admin/order-details/order-details.component';

@NgModule({
  declarations: [TrackingComponent],
  imports: [CommonModule, TrackingRoutingModule, AdminModule],
})
export class TrackingModule {}
