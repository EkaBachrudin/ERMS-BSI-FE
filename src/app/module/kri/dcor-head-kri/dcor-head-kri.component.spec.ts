import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcorHeadKriComponent } from './dcor-head-kri.component';

describe('DcorHeadKriComponent', () => {
  let component: DcorHeadKriComponent;
  let fixture: ComponentFixture<DcorHeadKriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcorHeadKriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcorHeadKriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
