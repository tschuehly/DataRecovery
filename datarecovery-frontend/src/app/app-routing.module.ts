import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TrackingComponent} from "./components/tracking/tracking.component";


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'tracking', component: TrackingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
