import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { urlBuilder } from '@app/commons/utils/url-builder';

import { ArtistService } from './artist.service';
import { environment as ENV } from '@environment';

describe('ArtistService', () => {
  const setup = (): {
    service: ArtistService;
    httpTestingController: HttpTestingController;
  } => {
    const service = TestBed.inject(ArtistService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    return { service, httpTestingController };
  };
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService]
    })
  );

  it('should be created', () => {
    const service: ArtistService = TestBed.inject(ArtistService);
    expect(service).toBeTruthy();
  });

  it('should to call fetch Artists', () => {
    const { service, httpTestingController } = setup();
    const url = urlBuilder.services(ENV.api.services.artists);
    const mockData = {};
    service.fetchArtists().subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call get Artist by ID ', () => {
    const { service, httpTestingController } = setup();
    const id = '123';
    const url = urlBuilder.services(`${ENV.api.services.artists}/${id}`);
    const mockData = {};
    service.getArtistById(id).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });
});
