import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumService } from './services/album.service';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

const AlbumRouting: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: 'detail/:id',
    component: AlbumDetailComponent
  }
];

@NgModule({
  declarations: [AlbumsComponent, AlbumDetailComponent],
  imports: [CommonModule, RouterModule.forChild(AlbumRouting)],
  providers: [AlbumService]
})
export class AlbumModule {}
