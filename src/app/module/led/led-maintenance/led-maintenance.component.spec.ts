import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedMaintenanceComponent } from './led-maintenance.component';

describe('LedMaintenanceComponent', () => {
  let component: LedMaintenanceComponent;
  let fixture: ComponentFixture<LedMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
