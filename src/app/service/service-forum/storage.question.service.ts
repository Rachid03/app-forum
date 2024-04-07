import { Question } from './../../models/Question';
// question.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class storageQuestion {
  private questionSubject: BehaviorSubject<Question | null> = new BehaviorSubject<Question | null>(null);

  constructor() { }

  setQuestion(question: Question) {
    this.questionSubject.next(question);
  }

  getQuestion(): Observable<Question | null> {
    return this.questionSubject.asObservable();
  }
}
