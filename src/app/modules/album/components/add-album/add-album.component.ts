import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { Album } from '../../album.interface';


@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {

  public albumForm: FormGroup;
  public album: Album;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.albumForm = new FormGroup({
    //   name: new FormControl("", [Validators.required]),
    //   cover: new FormControl("", [Validators.required]),
    //   description: new FormControl("", [Validators.required]),
    //   genre: new FormControl("", [Validators.required]),
    //   recordLabel: new FormControl("", [Validators.required]),
    // });



    this.albumForm = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      cover: ["", Validators.required] ,
      description: ["", [Validators.required]],
      genre: ["", [Validators.required]],
      recordLabel:["", [Validators.required]]
    });
  }
  public createAlbum(): void {
    alert("submited!!")
  }
}

