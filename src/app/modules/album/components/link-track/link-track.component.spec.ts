import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from '@testing/component/test.component';
import { ToastrService } from 'ngx-toastr';

import { LinkTrackComponent } from './link-track.component';

describe('LinkTrackComponent', () => {
  let component: LinkTrackComponent;
  let fixture: ComponentFixture<LinkTrackComponent>;
  const toastrServiceSpy = jasmine.createSpyObj('ArtistService', [
    'success',
    'error'
  ]);

  const toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkTrackComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'albums/', component: TestComponent }
        ]),
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ToastrService,
          useValue: toastrServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
