import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcsComponent } from './abcs.component';

describe('AbcsComponent', () => {
  let component: AbcsComponent;
  let fixture: ComponentFixture<AbcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
