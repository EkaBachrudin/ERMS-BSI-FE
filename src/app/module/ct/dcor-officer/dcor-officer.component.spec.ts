import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcorOfficerComponent } from './dcor-officer.component';

describe('DcorOfficerComponent', () => {
  let component: DcorOfficerComponent;
  let fixture: ComponentFixture<DcorOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcorOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcorOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
