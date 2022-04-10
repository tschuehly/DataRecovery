import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgbComponent } from './agb/agb.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'impressum', component: ImprintComponent },
  { path: 'datenschutz', component: PrivacyComponent },
  { path: 'agb', component: AgbComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingModule { }
