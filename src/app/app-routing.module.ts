import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { AllModificationWikiComponent } from './wiki/all-modification-wiki/all-modification-wiki.component';
import { AllConsulterWikiComponent } from './wiki/all-consulter-wiki/all-consulter-wiki.component';
import { ForumComponent } from './forum/forum.component';
import { AddQuestionComponent } from './forum/add-question/add-question.component';
import { AddAnswerComponent } from './forum/add-answer/add-answer.component';
import { ShowMessageAnswersComponent } from './forum/show-message-answers/show-message-answers.component';
import { UpdateQuestionComponent } from './forum/update-question/update-question.component';
const routes: Routes = [
  {path:"USPN_cfd",redirectTo:'/',pathMatch:'full'},
  {path:"",component:AllvitrineComponent},
  {path:"modificationwiki",component:AllModificationWikiComponent},
  {path:"consulterwiki",component:AllConsulterWikiComponent},
  {path:"consultationmessages",component:ForumComponent},
  {path:"addquestion",component:AddQuestionComponent},
  {path:"updatequestion",component:UpdateQuestionComponent},
  {path:"addanswer",component:AddAnswerComponent},
  {path:"showmessageanswers",component:ShowMessageAnswersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
