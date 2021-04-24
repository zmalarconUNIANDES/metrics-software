import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorsComponent } from './collectors.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { CollectorServiceMock } from '@testing/mocks/services/collector.service.mock';
import { TestingModule } from '@testing/testing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CollectorsComponent', () => {
  let component: CollectorsComponent;
  let fixture: ComponentFixture<CollectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectorsComponent],
      imports: [TestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: CollectorService,
          useClass: CollectorServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
