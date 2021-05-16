import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlbumService } from './services/album.service';
import { CommonsModule } from '@app/commons/commons.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const AlbumRouting: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: 'detail/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'add-album',
    component: AddAlbumComponent
  }
];

@NgModule({
  declarations: [AlbumsComponent, AlbumDetailComponent, AddAlbumComponent],
  imports: [CommonModule,
    RouterModule.forChild(AlbumRouting),
    CommonsModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [AlbumService]
})
export class AlbumModule {}
