import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorhRcsaKantorPusatComponent } from './sorh-rcsa-kantor-pusat.component';

describe('SorhRcsaKantorPusatComponent', () => {
  let component: SorhRcsaKantorPusatComponent;
  let fixture: ComponentFixture<SorhRcsaKantorPusatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorhRcsaKantorPusatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorhRcsaKantorPusatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
