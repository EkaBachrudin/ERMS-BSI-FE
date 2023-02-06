import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddKeyProcessComponent } from './modal-add-key-process.component';

describe('ModalAddKeyProcessComponent', () => {
  let component: ModalAddKeyProcessComponent;
  let fixture: ComponentFixture<ModalAddKeyProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddKeyProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddKeyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
