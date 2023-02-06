import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhrrComponent } from './ihrr.component';

describe('IhrrComponent', () => {
  let component: IhrrComponent;
  let fixture: ComponentFixture<IhrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IhrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IhrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
