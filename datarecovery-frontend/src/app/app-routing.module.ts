import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TrackingComponent} from './components/tracking/tracking.component';
import {LoginComponent} from './components/login/login.component';
import {OrderComponent} from './components/order/order.component';
import {ProductComponent} from './components/product/product.component';
import {StaticComponent} from './containers/static/static.component';
import {CategoryComponent} from './components/category/category.component';
import {ImprintComponent} from './containers/imprint/imprint.component';
import {PricesComponent} from './containers/prices/prices.component';
import {AgbComponent} from './containers/agb/agb.component';
import {AboutComponent} from './containers/about/about.component';
import {PrivacyComponent} from './containers/privacy/privacy.component';
import {SiteNotFoundComponent} from './containers/site-not-found/site-not-found.component';
import {BlogComponent} from './containers/blog/blog.component';


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
  {path: 'datenschutz', component: PrivacyComponent},
  {path: 'agb', component: AgbComponent},
  {path: 'philosophie', component: AboutComponent},
  {path: 'preise', component: PricesComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:articleUrl', component: BlogComponent},
  {path: '404', component: SiteNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
