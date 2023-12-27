import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceSansCoachComponent } from './exercice-sans-coach.component';

describe('ExerciceSansCoachComponent', () => {
  let component: ExerciceSansCoachComponent;
  let fixture: ComponentFixture<ExerciceSansCoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceSansCoachComponent]
    });
    fixture = TestBed.createComponent(ExerciceSansCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
