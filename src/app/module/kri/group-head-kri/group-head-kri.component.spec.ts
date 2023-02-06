import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHeadKriComponent } from './group-head-kri.component';

describe('GroupHeadKriComponent', () => {
  let component: GroupHeadKriComponent;
  let fixture: ComponentFixture<GroupHeadKriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupHeadKriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHeadKriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
