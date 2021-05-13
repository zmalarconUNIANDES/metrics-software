import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDetailComponent } from './collector-detail.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'getCollector'
  ]);
  const getCollector = collectorServiceSpy.getCollector as jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [CollectorDetailComponent],
      providers: [
        {
          provide: CollectorService,
          useValue: collectorServiceSpy
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
    fixture = TestBed.createComponent(CollectorDetailComponent);
    component = fixture.componentInstance;

    getCollector.and.returnValue(
      of({
        id: 100,
        name: 'Manolo Bellon',
        telephone: '3502457896',
        email: 'manollo@caracol.com.co',
        comments: [
          {
            id: 100,
            description: 'The most relevant album of Ruben Blades',
            rating: 5
          }
        ],
        favoritePerformers: [
          {
            id: 100,
            name: 'Rubén Blades Bellido de Luna',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
            description:
              'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
            birthDate: '1948-07-16T00:00:00.000Z'
          }
        ],
        collectorAlbums: [{ id: 100, price: 35, status: 'Active' }]
      })
    );

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
