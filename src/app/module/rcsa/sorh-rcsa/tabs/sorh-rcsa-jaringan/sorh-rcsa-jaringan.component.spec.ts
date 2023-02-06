import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorhRcsaJaringanComponent } from './sorh-rcsa-jaringan.component';

describe('SorhRcsaJaringanComponent', () => {
  let component: SorhRcsaJaringanComponent;
  let fixture: ComponentFixture<SorhRcsaJaringanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorhRcsaJaringanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorhRcsaJaringanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
