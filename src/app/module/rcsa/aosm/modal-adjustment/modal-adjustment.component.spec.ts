import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdjustmentComponent } from './modal-adjustment.component';

describe('ModalAdjustmentComponent', () => {
  let component: ModalAdjustmentComponent;
  let fixture: ComponentFixture<ModalAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
