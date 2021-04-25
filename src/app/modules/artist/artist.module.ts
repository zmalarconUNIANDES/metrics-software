import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistRoutingModule } from './artist-routing-module';
import { ArtistService } from './service/artist.service';


@NgModule({
  declarations: [ArtistListComponent, ArtistDetailsComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  providers: [ArtistService]
})
export class ArtistModule { }
