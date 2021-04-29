import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../entities/artist.interface';
import { ArtistService } from '../service/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  public artist: Artist;
  constructor(private service: ArtistService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service
      .getArtistById(this.route.snapshot.params.id)
      .subscribe((artist: Artist) => (this.artist = artist));
  }
}
