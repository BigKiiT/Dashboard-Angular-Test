import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMonitoringComponent } from './chart-monitoring.component';

describe('ChartMonitoringComponent', () => {
  let component: ChartMonitoringComponent;
  let fixture: ComponentFixture<ChartMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
