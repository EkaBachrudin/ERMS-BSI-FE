import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KantorPusatComponent } from './kantor-pusat.component';

describe('KantorPusatComponent', () => {
  let component: KantorPusatComponent;
  let fixture: ComponentFixture<KantorPusatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KantorPusatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KantorPusatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
