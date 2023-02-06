import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KriMaintenanceComponent } from './kri-maintenance.component';

describe('KriMaintenanceComponent', () => {
  let component: KriMaintenanceComponent;
  let fixture: ComponentFixture<KriMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KriMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KriMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
