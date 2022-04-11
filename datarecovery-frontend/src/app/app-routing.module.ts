import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ImprintComponent } from './components/legal/imprint/imprint.component';
import { PricesComponent } from './containers/prices/prices.component';
import { AgbComponent } from './components/legal/agb/agb.component';
import { AboutComponent } from './components/insight/about/about.component';
import { PrivacyComponent } from './components/legal/privacy/privacy.component';
import { SiteNotFoundComponent } from './containers/site-not-found/site-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import(`./components/admin/admin.module`).then(
        (module) => module.AdminModule
      ),
  },
  { path: 'preise', component: PricesComponent },
  { path: '404', component: SiteNotFoundComponent },
  {
    path: 'blog',
    loadChildren: () =>
      import('./components/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'datenrettung',
    loadChildren: () =>
      import('./components/insight/insight.module').then(
        (m) => m.InsightModule
      ),
  },
  {
    path: 'rechtliches',
    loadChildren: () =>
      import('./components/legal/legal.module').then((m) => m.LegalModule),
  },
  { path: 'tracking', loadChildren: () => import('./components/tracking/tracking.module').then(m => m.TrackingModule) },
  { path: '**', redirectTo: '/404' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
