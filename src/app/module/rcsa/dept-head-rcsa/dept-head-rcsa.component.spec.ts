import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptHeadRcsaComponent } from './dept-head-rcsa.component';

describe('DeptHeadRcsaComponent', () => {
  let component: DeptHeadRcsaComponent;
  let fixture: ComponentFixture<DeptHeadRcsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptHeadRcsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptHeadRcsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
