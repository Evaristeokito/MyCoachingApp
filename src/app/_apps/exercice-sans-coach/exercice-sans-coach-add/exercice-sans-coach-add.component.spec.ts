import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceSansCoachAddComponent } from './exercice-sans-coach-add.component';

describe('ExerciceSansCoachAddComponent', () => {
  let component: ExerciceSansCoachAddComponent;
  let fixture: ComponentFixture<ExerciceSansCoachAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceSansCoachAddComponent]
    });
    fixture = TestBed.createComponent(ExerciceSansCoachAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
