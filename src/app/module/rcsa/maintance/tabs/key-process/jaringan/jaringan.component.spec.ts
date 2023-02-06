import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaringanComponent } from './jaringan.component';

describe('JaringanComponent', () => {
  let component: JaringanComponent;
  let fixture: ComponentFixture<JaringanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaringanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JaringanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
