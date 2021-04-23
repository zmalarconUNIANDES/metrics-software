import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';

describe('CollectorService', () => {
  const setup = (): {
    service: CollectorService;
    httpTestingController: HttpTestingController;
  } => {
    const service = TestBed.inject(CollectorService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    return { service, httpTestingController };
  };
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorService]
    })
  );

  it('should be created', () => {
    const service: CollectorService = TestBed.inject(CollectorService);
    expect(service).toBeTruthy();
  });

  it('should to call fetch collectors', () => {
    const { service, httpTestingController } = setup();
    const url = urlBuilder.services(ENV.api.services.collectors);
    const mockData = {};
    service.fetchCollectors().subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call fetch collectors', () => {
    const { service, httpTestingController } = setup();
    const id = '123';
    const url = urlBuilder.services(`${ENV.api.services.collectors}/${id}`);
    const mockData = {};
    service.getCollector(id).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });
});
