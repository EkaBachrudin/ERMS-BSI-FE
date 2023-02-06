import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegionComponent } from './user-region.component';

describe('UserRegionComponent', () => {
  let component: UserRegionComponent;
  let fixture: ComponentFixture<UserRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
