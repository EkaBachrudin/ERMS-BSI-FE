import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSegmenComponent } from './user-segmen.component';

describe('UserSegmenComponent', () => {
  let component: UserSegmenComponent;
  let fixture: ComponentFixture<UserSegmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSegmenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSegmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
