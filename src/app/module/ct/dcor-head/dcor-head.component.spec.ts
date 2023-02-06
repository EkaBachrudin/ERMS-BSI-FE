import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcorHeadComponent } from './dcor-head.component';

describe('DcorHeadComponent', () => {
  let component: DcorHeadComponent;
  let fixture: ComponentFixture<DcorHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcorHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcorHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
