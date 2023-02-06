import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeHoodComponent } from './like-hood.component';

describe('LikeHoodComponent', () => {
  let component: LikeHoodComponent;
  let fixture: ComponentFixture<LikeHoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeHoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
