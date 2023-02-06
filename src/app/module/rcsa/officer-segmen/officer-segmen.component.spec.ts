import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerSegmenComponent } from './officer-segmen.component';

describe('OfficerSegmenComponent', () => {
  let component: OfficerSegmenComponent;
  let fixture: ComponentFixture<OfficerSegmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerSegmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficerSegmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
