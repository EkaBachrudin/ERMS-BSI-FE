import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptHeadKriComponent } from './dept-head-kri.component';

describe('DeptHeadKriComponent', () => {
  let component: DeptHeadKriComponent;
  let fixture: ComponentFixture<DeptHeadKriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptHeadKriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptHeadKriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
