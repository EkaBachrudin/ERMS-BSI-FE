import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSegmenManagerComponent } from './area-segmen-manager.component';

describe('AreaSegmenManagerComponent', () => {
  let component: AreaSegmenManagerComponent;
  let fixture: ComponentFixture<AreaSegmenManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSegmenManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaSegmenManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
