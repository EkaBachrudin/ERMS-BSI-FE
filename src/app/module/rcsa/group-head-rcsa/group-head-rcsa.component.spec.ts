import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHeadRcsaComponent } from './group-head-rcsa.component';

describe('GroupHeadRcsaComponent', () => {
  let component: GroupHeadRcsaComponent;
  let fixture: ComponentFixture<GroupHeadRcsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupHeadRcsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHeadRcsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
