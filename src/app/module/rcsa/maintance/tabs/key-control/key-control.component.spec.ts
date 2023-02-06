import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyControlComponent } from './key-control.component';

describe('KeyControlComponent', () => {
  let component: KeyControlComponent;
  let fixture: ComponentFixture<KeyControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
