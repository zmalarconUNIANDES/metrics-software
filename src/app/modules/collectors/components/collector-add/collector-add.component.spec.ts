import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectorAddComponent } from './collector-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistService } from '@modules/artist/service/artist.service';

describe('CollectorAddComponent', () => {
  let component: CollectorAddComponent;
  let fixture: ComponentFixture<CollectorAddComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'addMusician'
  ]);

  const artistServiceSpy = jasmine.createSpyObj('ArtistService', [
    'fetchArtists'
  ]);

  const addMusician = collectorServiceSpy.addMusician as jasmine.Spy;
  const fetchArtists = artistServiceSpy.fetchArtists as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [CollectorAddComponent],
      providers: [
        {
          provide: CollectorService,
          useValue: collectorServiceSpy
        },
        {
          provide: ArtistService,
          useValue: artistServiceSpy
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: 100 }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorAddComponent);
    component = fixture.componentInstance;

    addMusician.and.returnValue(of());
    fetchArtists.and.returnValue(of());

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
