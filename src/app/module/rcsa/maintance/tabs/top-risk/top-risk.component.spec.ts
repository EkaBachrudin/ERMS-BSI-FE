import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRiskComponent } from './top-risk.component';

describe('TopRiskComponent', () => {
  let component: TopRiskComponent;
  let fixture: ComponentFixture<TopRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
