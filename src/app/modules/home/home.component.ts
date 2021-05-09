import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlbumService } from '@modules/album/services/album.service';
import { ArtistService } from '@modules/artist/service/artist.service';
import { Album } from '@modules/album/album.interface';
import { Artist } from '@modules/artist/entities/artist.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  albums: Album[] = [];
  musicians: Artist[] = [];

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.subscription = this.albumService
      .getAlbums()
      // tslint:disable-next-line: deprecation
      .subscribe((albums: Album[]) => (this.albums = albums));

    this.subscription = this.artistService
      .fetchArtists()
      // tslint:disable-next-line: deprecation
      .subscribe((musicians: Artist[]) => (this.musicians = musicians));
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
