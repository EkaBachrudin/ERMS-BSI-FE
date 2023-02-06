import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptHeadIamComponent } from './dept-head-iam.component';

describe('DeptHeadIamComponent', () => {
  let component: DeptHeadIamComponent;
  let fixture: ComponentFixture<DeptHeadIamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptHeadIamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptHeadIamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
