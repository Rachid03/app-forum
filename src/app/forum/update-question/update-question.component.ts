
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storageQuestion } from 'src/app/service/service-forum/storage.question.service';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/service/question/question.service';
@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {
  questionForm: any;
  question!: Question;


  constructor(private formBuilder: FormBuilder, private questionStorageService: storageQuestion, private questionService: QuestionService) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      title: ['', Validators.required],
      questionDetails: ['', Validators.required],
      anonymous: [false]
    });
    this.questionStorageService.getQuestion().subscribe(question => {
      if (question) {
        this.question = question;
        console.log(this.question)
      }
    });
    this.questionForm = this.formBuilder.group({
      title: [this.question?.question, Validators.required],
      questionDetails: [this.question?.descriptionQuestion, Validators.required],
      anonymous: [this.question?.anonymous]
    });
  }

  // Method to add the question
  updpateQuestion() {
    if (this.questionForm.valid && this.question?.id) {

        this.question.descriptionQuestion= this.questionForm.get('title')?.value;
        this.question.descriptionQuestion= this.questionForm.get('questionDetails')?.value;

      this.questionService.updateQuestion(this.question?.id,this.question).subscribe(response => {
        console.log('Question added successfully:', response);
      }, error => {
        console.error('Error adding question:', error);
      });
    }
  }
}



