import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PricesComponent} from './components/prices/prices.component';
import {SiteNotFoundComponent} from './components/site-not-found/site-not-found.component';
import {AboutMeComponent} from "./components/home/about-me/about-me.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'admin',
    loadChildren: () =>
      import(`./components/admin/admin.module`).then(
        (module) => module.AdminModule
      ),
  },
  {path: 'preise', component: PricesComponent},
  {path: '404', component: SiteNotFoundComponent},
  {
    path: 'datenrettung',
    loadChildren: () =>
      import('./components/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'rechtliches',
    loadChildren: () =>
      import('./components/legal/legal.module').then((m) => m.LegalModule),
  },
  {path: 'tracking', loadChildren: () => import('./components/tracking/tracking.module').then(m => m.TrackingModule)},

  // {path: 'debug-component', component: AboutMeComponent},
  {path: '**', redirectTo: '/404'},
  {path: 'datenrettung/**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
