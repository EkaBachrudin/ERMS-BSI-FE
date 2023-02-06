import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembukuComponent } from './pembuku.component';

describe('PembukuComponent', () => {
  let component: PembukuComponent;
  let fixture: ComponentFixture<PembukuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembukuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PembukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
