import { questions } from './../mock-data/questions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { storageQuestion } from '../service/service-forum/storage.question.service';
import { Question } from '../models/Question';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  questionList: any[] = questions;
  filteredQuestionList: any[] = [];
  searchForm?: any;

  constructor(private fb: FormBuilder,private storageQuestionService:storageQuestion) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });

   //service call to get all the questions from the
    this.filteredQuestionList = this.questionList;//mock data

  }
  //this function just for test
  filterQuestions(query: string) {
    this.filteredQuestionList = this.questionList.filter(question =>
      question.question.toLowerCase().includes(query.toLowerCase())
    );
  }

  search() {
    const searchQuery = this.searchForm?.get('searchQuery')?.value;
    this.filterQuestions(searchQuery);
    console.log(this.filteredQuestionList);
    //the second method: calling a service to search to get the questions
  }

  sendQuestion(question:Question) {
    console.log(question)
    this.storageQuestionService.setQuestion(question);
    this.storageQuestionService.getQuestion().subscribe(question => {
     console.log(question);
    });
  }
}
