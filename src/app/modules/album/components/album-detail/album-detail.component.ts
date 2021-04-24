import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '@modules/album/services/album.service';
import { Album } from '@modules/album/album.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  album: Album;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.subscription = this.albumService
      .getAlbumById('100')
      // tslint:disable-next-line: deprecation
      .subscribe((album: Album) => (this.album = album));
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
