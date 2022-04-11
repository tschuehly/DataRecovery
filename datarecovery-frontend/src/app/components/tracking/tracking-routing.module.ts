import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackingComponent } from './tracking.component';

const routes: Routes = [
  { path: '', component: TrackingComponent },
  { path: ':trackingId/:postalCode', component: TrackingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingRoutingModule {}
