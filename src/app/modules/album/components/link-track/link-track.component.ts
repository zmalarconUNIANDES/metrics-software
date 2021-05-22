import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Track } from '../../album.interface';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-link-track',
  templateUrl: './link-track.component.html',
  styleUrls: ['./link-track.component.scss']
})
export class LinkTrackComponent implements OnInit {
  public trackForm: FormGroup;
  public album: object;
  private subscriptions: Subscription[] = [];
  public idAlbum: string;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private albumServices: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trackForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      duration: ['', Validators.required]
    });
    this.idAlbum = this.route.snapshot.params.id;
  }
  public cancelForm(): void {
    this.router.navigateByUrl('/albums/');
  }
  public AddNewTrack(): void {
    const track: Track = {
      name: this.trackForm.controls.name.value,
      duration: this.trackForm.controls.duration.value
    };
    this.subscriptions.push(
      this.albumServices.addTrackToAlbum(this.idAlbum, track).subscribe(
        (response: any) => {
          if (response.name && response.name === track.name) {
            this.toastr.success(
              track.name,
              $localize`Albúm agregado correctamente`
            );
            this.router.navigateByUrl('/albums/');
          } else {
            this.toastr.error(
              $localize`No hemos podido agregar el albúm`,
              $localize`Ha ocurrido un error`
            );
          }
        },
        (error) => {
          this.toastr.error(
            error?.error?.message ||
              $localize`No hemos podido agregar el albúm`,
            $localize`Ha ocurrido un error`
          );
        }
      )
    );
  }
}
