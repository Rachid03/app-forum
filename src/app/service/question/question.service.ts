import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8080/api/questions'; // Replace this with your API endpoint

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getQuestionById(questionId: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/${questionId}`);
  }

  addQuestion(question: Question): Observable<any> {
    return this.http.post(this.apiUrl, question);
  }

  updateQuestion(questionId: number, question: Question): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${questionId}`, question);
  }

  deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${questionId}`);
  }

  getAllAnswersForQuestion(questionId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${questionId}/answers`);
  }

  getAnswerById(questionId: number, answerId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${questionId}/answers/${answerId}`);
  }

  addAnswerToQuestion(questionId: number, answer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${questionId}/answers`, answer);
  }

  updateAnswerForQuestion(questionId: number, answerId: number, answer: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${questionId}/answers/${answerId}`, answer);
  }

  deleteAnswerForQuestion(questionId: number, answerId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${questionId}/answers/${answerId}`);
  }

  searchQuestions(query: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/search?query=${query}`);
  }
}
