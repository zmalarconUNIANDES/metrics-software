import { Component, OnInit } from '@angular/core';
import { Artist } from '../entities/artist.interface';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  public artist: Artist[];
  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.fetchArtist();
  }

  private fetchArtist(): void {
    this.artistService.
    fetchArtists()
    .subscribe((artists: Artist[]) => (this.artist = artists));
  }
}
