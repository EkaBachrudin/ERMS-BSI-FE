import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCompositeComponent } from './rating-composite.component';

describe('RatingCompositeComponent', () => {
  let component: RatingCompositeComponent;
  let fixture: ComponentFixture<RatingCompositeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCompositeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
