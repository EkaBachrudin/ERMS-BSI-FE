import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengusulComponent } from './pengusul.component';

describe('PengusulComponent', () => {
  let component: PengusulComponent;
  let fixture: ComponentFixture<PengusulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengusulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengusulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
