import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorhRcsaComponent } from './sorh-rcsa.component';

describe('SorhRcsaComponent', () => {
  let component: SorhRcsaComponent;
  let fixture: ComponentFixture<SorhRcsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorhRcsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorhRcsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
