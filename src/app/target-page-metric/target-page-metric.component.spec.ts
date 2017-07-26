import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPageMetricComponent } from './target-page-metric.component';

describe('TargetPageMetricComponent', () => {
  let component: TargetPageMetricComponent;
  let fixture: ComponentFixture<TargetPageMetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetPageMetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPageMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
