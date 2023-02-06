import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedNoteComponent } from './rejected-note.component';

describe('RejectedNoteComponent', () => {
  let component: RejectedNoteComponent;
  let fixture: ComponentFixture<RejectedNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
