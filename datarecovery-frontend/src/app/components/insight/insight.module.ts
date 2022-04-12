import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightRoutingModule } from './insight-routing.module';
import { InsightComponent } from './insight.component';
import { HddComponent } from './hdd/hdd.component';
import { SsdComponent } from './ssd/ssd.component';
import { FlashComponent } from './flash/flash.component';
import { RaidComponent } from './raid/raid.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    InsightComponent,
    HddComponent,
    SsdComponent,
    FlashComponent,
    RaidComponent,
    AboutComponent
  ],
  imports: [CommonModule, InsightRoutingModule],
  providers: []
})
export class InsightModule {}
