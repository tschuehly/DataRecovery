import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FlashComponent } from './flash/flash.component';
import { HddComponent } from './hdd/hdd.component';
import { InsightComponent } from './insight.component';
import { RaidComponent } from './raid/raid.component';
import { SsdComponent } from './ssd/ssd.component';

const routes: Routes = [
  {
    path: '',
    component: InsightComponent,
    children: [
      { path: 'hdd', component: HddComponent },
      { path: 'flash', component: FlashComponent },
      { path: 'ssd', component: SsdComponent },
      { path: 'raid', component: RaidComponent },
      { path: 'philosophie', component: AboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightRoutingModule {}
