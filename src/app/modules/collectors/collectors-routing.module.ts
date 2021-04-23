import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectorsComponent } from '@modules/collectors/components/collectors/collectors.component';
import { CollectorDetailComponent } from '@modules/collectors/components/collector-detail/collector-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CollectorsComponent
  },
  {
    path: ':id',
    component: CollectorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorsRoutingModule {}
