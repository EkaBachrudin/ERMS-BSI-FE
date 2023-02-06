import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemutusComponent } from './pemutus.component';

describe('PemutusComponent', () => {
  let component: PemutusComponent;
  let fixture: ComponentFixture<PemutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PemutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
