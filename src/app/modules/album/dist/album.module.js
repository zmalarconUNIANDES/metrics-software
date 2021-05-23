"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlbumModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var album_service_1 = require("./services/album.service");
var commons_module_1 = require("@app/commons/commons.module");
var albums_component_1 = require("./components/albums/albums.component");
var album_detail_component_1 = require("./components/album-detail/album-detail.component");
var add_album_component_1 = require("./components/add-album/add-album.component");
var album_comments_component_1 = require("./components/album-comments/album-comments.component");
var link_track_component_1 = require("./components/link-track/link-track.component");
var AlbumRouting = [
    {
        path: '',
        component: albums_component_1.AlbumsComponent
    },
    {
        path: 'detail/:id',
        component: album_detail_component_1.AlbumDetailComponent
    },
    {
        path: 'add-album/:collectorid',
        component: add_album_component_1.AddAlbumComponent
    },
    {
        path: 'add-track/:id',
        component: link_track_component_1.LinkTrackComponent
    }
];
var AlbumModule = /** @class */ (function () {
    function AlbumModule() {
    }
    AlbumModule = __decorate([
        core_1.NgModule({
            declarations: [
                albums_component_1.AlbumsComponent,
                album_detail_component_1.AlbumDetailComponent,
                album_comments_component_1.AlbumCommentsComponent,
                add_album_component_1.AddAlbumComponent,
                link_track_component_1.LinkTrackComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(AlbumRouting),
                commons_module_1.CommonsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [album_service_1.AlbumService]
        })
    ], AlbumModule);
    return AlbumModule;
}());
exports.AlbumModule = AlbumModule;
