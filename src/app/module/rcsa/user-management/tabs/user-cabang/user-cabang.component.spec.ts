import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabangComponent } from './user-cabang.component';

describe('UserCabangComponent', () => {
  let component: UserCabangComponent;
  let fixture: ComponentFixture<UserCabangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCabangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCabangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
