import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantorPusatKeyRiskComponent } from './kantor-pusat-key-risk.component';

describe('KantorPusatKeyRiskComponent', () => {
  let component: KantorPusatKeyRiskComponent;
  let fixture: ComponentFixture<KantorPusatKeyRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KantorPusatKeyRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantorPusatKeyRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
