import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { QuestionService } from 'src/app/service/question/question.service';
import { storageQuestion } from 'src/app/service/service-forum/storage.question.service';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent {

  answerForm: any;
  question!: Question;


  constructor(private formBuilder: FormBuilder, private questionService: QuestionService,private questionStorageService: storageQuestion, private location: Location) { }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answer: ['', Validators.required]
    });

    this.questionStorageService.getQuestion().subscribe(question => {
      if (question) {
        this.question = question;
        console.log(this.question)
      }
    });

    
  }

  submitAnswer() {
    if (this.answerForm.valid && this.question?.id) {
      const answerData = {
        content: this.answerForm.get('answer').value
      };
           
      this.questionService.addAnswerToQuestion(this.question?.id,answerData).subscribe(response => {
        console.log('Answer added successfully:', response);
        
        this.navigateBack();
      }, error => {
        console.error('Error adding answer:', error);

      });
    }
  }

  navigateBack() {
    this.location.back();
  }
}
