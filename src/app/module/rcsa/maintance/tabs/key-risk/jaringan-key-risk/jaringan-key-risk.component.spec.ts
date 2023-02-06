import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaringanKeyRiskComponent } from './jaringan-key-risk.component';

describe('JaringanKeyRiskComponent', () => {
  let component: JaringanKeyRiskComponent;
  let fixture: ComponentFixture<JaringanKeyRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaringanKeyRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaringanKeyRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
