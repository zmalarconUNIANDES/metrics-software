import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDetailComponent } from './collector-detail.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { CollectorServiceMock } from '@testing/mocks/services/collector.service.mock';
import { ActivatedRoute } from '@angular/router';

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorDetailComponent],
      providers: [
        {
          provide: CollectorService,
          useClass: CollectorServiceMock
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
