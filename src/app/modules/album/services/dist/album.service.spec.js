"use strict";
exports.__esModule = true;
exports.mockAlbum = void 0;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var url_builder_1 = require("@app/commons/utils/url-builder");
var _environment_1 = require("@environment");
var album_service_1 = require("./album.service");
exports.mockAlbum = {
    id: 100,
    name: 'Buscando América',
    cover: 'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
    releaseDate: '1984-08-01T00:00:00.000Z',
    description: 'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
    genre: 'Salsa',
    recordLabel: 'Elektra',
    tracks: [
        {
            id: 100,
            name: 'Decisiones',
            duration: '5:05'
        },
        {
            id: 101,
            name: 'Desapariciones',
            duration: '6:29'
        }
    ],
    performers: [
        {
            id: 100,
            name: 'Rubén Blades Bellido de Luna',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
            description: 'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
            birthDate: '1948-07-16T00:00:00.000Z'
        }
    ],
    comments: [
        {
            id: 100,
            description: 'The most relevant album of Ruben Blades',
            rating: 5
        }
    ]
};
describe('AlbumService', function () {
    var service;
    var httpMock;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule],
            providers: [album_service_1.AlbumService]
        });
        service = testing_1.TestBed.inject(album_service_1.AlbumService);
        // tslint:disable-next-line: deprecation
        httpMock = testing_1.TestBed.get(testing_2.HttpTestingController);
    });
    afterEach(function () {
        httpMock.verify();
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should provide getAlbums', function () {
        var url = url_builder_1.urlBuilder.services(_environment_1.environment.api.services.albums);
        // tslint:disable-next-line: deprecation
        service.getAlbums().subscribe(function (albums) {
            expect(albums).not.toBe(null);
        });
        var req = httpMock.expectOne(url);
        req.flush(exports.mockAlbum);
        expect(req.request.method).toBe('GET');
    });
    it('should provide getAlbumById', function () {
        var id = '100';
        var url = url_builder_1.urlBuilder.services(_environment_1.environment.api.services.albums + ("/" + id));
        // tslint:disable-next-line: deprecation
        service.getAlbumById(id).subscribe(function (album) {
            expect(album).not.toBe(null);
        });
        var req = httpMock.expectOne(url);
        req.flush(exports.mockAlbum);
        expect(req.request.method).toBe('GET');
    });
    it('should provide addNewAlbum', function () {
        var url = url_builder_1.urlBuilder.services(_environment_1.environment.api.services.albums);
        var albumInfo = {
            name: 'Yellow',
            cover: 'imagen',
            releaseDate: '2000-01-01',
            description: 'un buen album',
            genre: 'rock',
            recordLabel: 'recodlabel'
        };
        // tslint:disable-next-line: deprecation
        service.addNewAlbum(albumInfo).subscribe(function (album) {
            expect(album).not.toBe(null);
        });
        var req = httpMock.expectOne(url);
        req.flush(exports.mockAlbum);
        expect(req.request.method).toBe('POST');
    });
    it('should provide addComments', function () {
        var albumId = 100;
        var comments = [
            {
                collector: { id: 1 },
                description: 'The most relevant album of Ruben Blades',
                rating: 5
            }
        ];
        var url = url_builder_1.urlBuilder.services(_environment_1.environment.api.services.comments, {
            albumId: albumId
        });
        // tslint:disable-next-line: deprecation
        service.addComments(albumId, { comments: comments }).subscribe(function (saved) {
            expect(saved).not.toBe(null);
        });
        var req = httpMock.expectOne(url);
        req.flush({
            description: 'It is an amazing album 45',
            rating: 4,
            collector: {
                id: 100,
                name: 'Manolo Bellon',
                telephone: '3502457896',
                email: 'manollo@caracol.com.co'
            },
            album: {
                id: 100,
                name: 'Buscando América',
                cover: 'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
                releaseDate: '1984-08-01T00:00:00.000Z',
                description: 'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
                genre: 'Salsa',
                recordLabel: 'Elektra'
            },
            id: 1
        });
        expect(req.request.method).toBe('POST');
    });
});
