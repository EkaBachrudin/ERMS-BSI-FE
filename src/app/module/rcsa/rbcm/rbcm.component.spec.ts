import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbcmComponent } from './rbcm.component';

describe('RbcmComponent', () => {
  let component: RbcmComponent;
  let fixture: ComponentFixture<RbcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbcmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
