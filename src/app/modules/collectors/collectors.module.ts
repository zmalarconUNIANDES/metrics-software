import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectorsRoutingModule } from './collectors-routing.module';
import { CollectorsComponent } from './components/collectors/collectors.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { CollectorDetailComponent } from './components/collector-detail/collector-detail.component';

@NgModule({
  declarations: [CollectorsComponent, CollectorDetailComponent],
  imports: [CommonModule, CollectorsRoutingModule],
  providers: [CollectorService]
})
export class CollectorsModule {}
