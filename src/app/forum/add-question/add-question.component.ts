import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/service/question/question.service';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  questionForm: any;

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService) { }

  ngOnInit() {
    this.questionForm = this.formBuilder.group({
      title: ['', Validators.required],
      questionDetails: ['', Validators.required],
      anonymous: [false]
    });
  }

  // Method to add the question
  submitForm() {
    if (this.questionForm.valid) {
      const question: Question = {
        question: this.questionForm.get('title')?.value,
        descriptionQuestion: this.questionForm.get('questionDetails')?.value,
        user: {
          fullName: "redouane",
          profilePicture: "profilePicture"
        }
      };

      this.questionService.addQuestion(question).subscribe(response => {
        console.log('Question added successfully:', response);

      }, error => {
        console.error('Error adding question:', error);
        
      });
    }
  }
}
