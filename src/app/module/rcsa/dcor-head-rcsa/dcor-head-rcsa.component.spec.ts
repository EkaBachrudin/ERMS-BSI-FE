import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcorHeadRcsaComponent } from './dcor-head-rcsa.component';

describe('DcorHeadRcsaComponent', () => {
  let component: DcorHeadRcsaComponent;
  let fixture: ComponentFixture<DcorHeadRcsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcorHeadRcsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcorHeadRcsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
