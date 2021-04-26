import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistServiceMock } from '@testing/mocks/services/artist.service.mock';
import { TestingModule } from '@testing/testing.module';
import { ArtistService } from '../service/artist.service';

import { ArtistDetailsComponent } from './artist-details.component';

describe('ArtistDetailsComponent', () => {
  let component: ArtistDetailsComponent;
  let fixture: ComponentFixture<ArtistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailsComponent ],
      imports: [TestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ArtistService,
          useClass: ArtistServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
