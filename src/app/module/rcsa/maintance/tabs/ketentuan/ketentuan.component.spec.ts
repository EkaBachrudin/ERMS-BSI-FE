import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetentuanComponent } from './ketentuan.component';

describe('KetentuanComponent', () => {
  let component: KetentuanComponent;
  let fixture: ComponentFixture<KetentuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetentuanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KetentuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
