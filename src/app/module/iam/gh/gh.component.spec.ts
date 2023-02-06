import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhComponent } from './gh.component';

describe('GhComponent', () => {
  let component: GhComponent;
  let fixture: ComponentFixture<GhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
