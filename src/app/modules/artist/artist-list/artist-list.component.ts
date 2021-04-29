import { Component, OnInit } from '@angular/core';
import { Artist } from '../entities/artist.interface';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  public artists: Artist[];
  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.fetchArtist();
  }

  private fetchArtist(): void {
    this.artistService
      .fetchArtists()
      .subscribe((artists: Artist[]) => (this.artists = artists));
  }
}
