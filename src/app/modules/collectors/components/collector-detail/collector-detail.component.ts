import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { Collector } from '@modules/collectors/entities/colllector.interface';
import {
  isNullOrUndefined,
  removeSubscriptions
} from '@app/commons/utils/util';
import { Subscription } from 'rxjs';
import { Album } from '@modules/album/album.interface';
import { AlbumService } from '@modules/album/services/album.service';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: [
    './collector-detail.component.scss',
    '../../../album/components/albums/albums.component.scss'
  ]
})
export class CollectorDetailComponent implements OnInit, OnDestroy {
  public collector: Collector;
  public albums: Album[];

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: CollectorService,
    private albumsService: AlbumService
  ) {}

  ngOnInit(): void {
    this.getCollector();
    this.getAlbums();
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }

  public removeArtistToFavorites(id: number): void {
    this.subscriptions.push(
      this.service
        .removeMusician({
          collectorId: this.id,
          musicianId: id.toString()
        })
        .subscribe(() => this.getCollector())
    );
  }

  public removeAlbumToFavorites(id: number): void {
    this.subscriptions.push(
      this.service
        .removeAlbum({
          collectorId: this.id,
          albumId: id.toString()
        })
        .subscribe(() => this.getCollector())
    );
  }

  public searchAlbumDetail(albumId: number): Album {
    return !isNullOrUndefined(this.albums) && !isNullOrUndefined(albumId)
      ? this.albums.find((album) => album.id === albumId)
      : null;
  }

  private getCollector(): void {
    this.collector = undefined;
    this.subscriptions.push(
      this.service
        .getCollector(this.id)
        .subscribe((collector: Collector) => (this.collector = collector))
    );
  }

  private getAlbums(): void {
    this.albums = undefined;
    this.subscriptions.push(
      this.albumsService
        .getAlbums()
        .subscribe((albums: Album[]) => (this.albums = albums))
    );
  }

  get id(): string {
    return this.params.id;
  }

  get params(): Params {
    return this.route.snapshot.params;
  }
}
