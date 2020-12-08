import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCalComponent } from './about-cal.component';

describe('AboutCalComponent', () => {
  let component: AboutCalComponent;
  let fixture: ComponentFixture<AboutCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
