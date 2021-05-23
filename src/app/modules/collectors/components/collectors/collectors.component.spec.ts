import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorsComponent } from './collectors.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { TestingModule } from '@testing/testing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CollectorsComponent', () => {
  let component: CollectorsComponent;
  let fixture: ComponentFixture<CollectorsComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'fetchCollectors'
  ]);
  const fetchCollectors = collectorServiceSpy.fetchCollectors as jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorsComponent],
      imports: [
        HttpClientTestingModule,
        TestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        {
          provide: CollectorService,
          useValue: collectorServiceSpy
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorsComponent);
    component = fixture.componentInstance;

    fetchCollectors.and.returnValue(
      of([
        {
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
        },
        {
          id: 101,
          name: 'Jaime Monsalve',
          telephone: '3012357936',
          email: 'jmonsalve@rtvc.com.co',
          comments: [
            { id: 101, description: 'I love this album of Queen', rating: 5 }
          ],
          favoritePerformers: [
            {
              id: 101,
              name: 'Queen',
              image:
                'https://pm1.narvii.com/6724/a8b29909071e9d08517b40c748b6689649372852v2_hq.jpg',
              description:
                'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.',
              creationDate: '1970-01-01T00:00:00.000Z'
            }
          ],
          collectorAlbums: [{ id: 101, price: 25, status: 'Active' }]
        }
      ])
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
