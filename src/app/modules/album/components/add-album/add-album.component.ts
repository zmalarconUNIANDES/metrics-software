import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Album } from '../../album.interface';
import { AlbumService } from '../../services/album.service';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {

  public albumForm: FormGroup;
  public album: object;
  private subscriptions: Subscription[] = [];
  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private albumServices: AlbumService) { }

  ngOnInit(): void {
    this.albumForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      cover: ["", Validators.required] ,
      description: ["", [Validators.required]],
      genre: ["", [Validators.required]],
      recordLabel:["", [Validators.required]],
      releaseDate: ["", Validators.required]
    });
  }
  public cancelForm():void {
    this.router.navigateByUrl('/albums');
  }
  public createAlbum(): void {
    this.album = {
      name: this.albumForm.controls.name.value,
      cover: this.albumForm.controls.cover.value,
      releaseDate: this.albumForm.controls.releaseDate.value,
      description: this.albumForm.controls.description.value,
      genre: this.albumForm.controls.genre.value,
      recordLabel: this.albumForm.controls.recordLabel.value
    };

    this.subscriptions.push(
      this.albumServices.addNewAlbum(this.album)
      .subscribe(
        () => {
          this.toastr.success(
            this.albumForm.controls.name.value,
            $localize`Albúm agregado correctamente`
          );
          this.router.navigateByUrl('/albums');
        },
        (error) => {
          this.toastr.error(
            error?.error?.message ||
              $localize`No hemos podido agregar el albúm`,
            $localize`Ha ocurrido un error`
          );
        }
      )
    )
  }
}

