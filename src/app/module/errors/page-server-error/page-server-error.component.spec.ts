import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServerErrorComponent } from './page-server-error.component';

describe('PageServerErrorComponent', () => {
  let component: PageServerErrorComponent;
  let fixture: ComponentFixture<PageServerErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageServerErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
