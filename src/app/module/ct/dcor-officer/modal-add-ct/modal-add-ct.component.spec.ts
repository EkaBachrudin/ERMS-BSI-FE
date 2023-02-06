import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCtComponent } from './modal-add-ct.component';

describe('ModalAddCtComponent', () => {
  let component: ModalAddCtComponent;
  let fixture: ComponentFixture<ModalAddCtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
