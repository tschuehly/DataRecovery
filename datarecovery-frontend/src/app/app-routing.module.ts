import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TrackingComponent} from './components/tracking/tracking.component';
import {LoginComponent} from './components/login/login.component';
import {OrderComponent} from './components/order/order.component';
import {ProductComponent} from './components/product/product.component';
import {StaticComponent} from './containers/static/static.component';
import {CategoryComponent} from './components/category/category.component';
import {ImprintComponent} from "./containers/imprint/imprint.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tracking', component: TrackingComponent},
  {path: 'tracking/:trackingId/:postalCode', component: TrackingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'datenrettung/:variant', component: StaticComponent},
  {path: 'impressum', component: ImprintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
