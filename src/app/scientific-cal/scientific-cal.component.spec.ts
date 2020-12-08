import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificCalComponent } from './scientific-cal.component';

describe('ScientificCalComponent', () => {
  let component: ScientificCalComponent;
  let fixture: ComponentFixture<ScientificCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
