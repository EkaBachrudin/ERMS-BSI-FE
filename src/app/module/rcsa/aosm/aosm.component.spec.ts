import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosmComponent } from './aosm.component';

describe('AosmComponent', () => {
  let component: AosmComponent;
  let fixture: ComponentFixture<AosmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AosmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
