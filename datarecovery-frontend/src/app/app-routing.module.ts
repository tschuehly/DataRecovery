import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TrackingComponent} from './components/tracking/tracking.component';
import {LoginComponent} from './components/login/login.component';
import {OrderComponent} from './components/order/order.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tracking', component: TrackingComponent},
  {path: 'tracking/:trackingId/:postalCode', component: TrackingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
