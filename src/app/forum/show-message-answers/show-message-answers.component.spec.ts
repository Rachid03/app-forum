import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMessageAnswersComponent } from './show-message-answers.component';

describe('ShowMessageAnswersComponent', () => {
  let component: ShowMessageAnswersComponent;
  let fixture: ComponentFixture<ShowMessageAnswersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowMessageAnswersComponent]
    });
    fixture = TestBed.createComponent(ShowMessageAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
