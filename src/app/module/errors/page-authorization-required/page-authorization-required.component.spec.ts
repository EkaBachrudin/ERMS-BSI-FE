import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthorizationRequiredComponent } from './page-authorization-required.component';

describe('PageAuthorizationRequiredComponent', () => {
  let component: PageAuthorizationRequiredComponent;
  let fixture: ComponentFixture<PageAuthorizationRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAuthorizationRequiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAuthorizationRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
