import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import {OrderComponent} from './order/order.component'
import { ProductComponent } from './product/product.component';
import { TrackingComponent } from './tracking/tracking.component';
const routes: Routes = [
  {path: 'order', component: OrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
