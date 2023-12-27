import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceSingleComponent } from './exercice-single.component';

describe('ExerciceSingleComponent', () => {
  let component: ExerciceSingleComponent;
  let fixture: ComponentFixture<ExerciceSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciceSingleComponent]
    });
    fixture = TestBed.createComponent(ExerciceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
