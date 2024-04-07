import { questions } from './../../mock-data/questions';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { storageQuestion } from 'src/app/service/service-forum/storage.question.service';

@Component({
  selector: 'app-show-message-answers',
  templateUrl: './show-message-answers.component.html',
  styleUrls: ['./show-message-answers.component.css']
})
export class ShowMessageAnswersComponent implements OnInit{
  question? :Question;
  constructor(private  questionService : storageQuestion) {}


  ngOnInit(): void {
    this.questionService.getQuestion().subscribe(question => {
      if (question) {
        this.question = question;
        console.log(this.question)
      }
     });

  }
  deleteQuestion(){

  }
  onDeleteConfirmed() {
    // Call your delete question method here
  }





}
