import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';

const AlbumRouting: Routes = [
  {
    path: '',
    component: AlbumListComponent
  },
  {
    path: 'detail',
    component: AlbumListComponent
  }
];

@NgModule({
  declarations: [AlbumListComponent],
  imports: [CommonModule, RouterModule.forChild(AlbumRouting)]
})
export class AlbumModule {}
