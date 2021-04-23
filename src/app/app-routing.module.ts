import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        path: '',
        redirectTo: 'album',
        pathMatch: 'full',
      },
      {
        path: 'album',
        loadChildren: () => import('./modules/album/album.module').then(m => m.AlbumModule)
      },
      {
          path: '**',
          redirectTo: 'album',
          pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
