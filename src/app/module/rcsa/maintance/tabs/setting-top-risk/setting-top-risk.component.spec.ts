import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTopRiskComponent } from './setting-top-risk.component';

describe('SettingTopRiskComponent', () => {
  let component: SettingTopRiskComponent;
  let fixture: ComponentFixture<SettingTopRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingTopRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingTopRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
