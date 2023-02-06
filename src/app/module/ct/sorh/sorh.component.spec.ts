import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorhComponent } from './sorh.component';

describe('SorhComponent', () => {
  let component: SorhComponent;
  let fixture: ComponentFixture<SorhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
