import { TestBed } from '@angular/core/testing';

import { storageQuestion } from './storage.question.service';

describe('QuestionService', () => {
  let service: storageQuestion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(storageQuestion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
