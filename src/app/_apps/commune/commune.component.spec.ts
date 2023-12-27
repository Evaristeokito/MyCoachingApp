import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuneComponent } from './commune.component';

describe('CommuneComponent', () => {
  let component: CommuneComponent;
  let fixture: ComponentFixture<CommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommuneComponent]
    });
    fixture = TestBed.createComponent(CommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
