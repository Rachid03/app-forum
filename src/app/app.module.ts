import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { AllModificationWikiComponent } from './wiki/all-modification-wiki/all-modification-wiki.component';
import { AllConsulterWikiComponent } from './wiki/all-consulter-wiki/all-consulter-wiki.component';
import { NavbarComponent } from './vitrine/navbar/navbar.component';
import { BodyVitrineComponent } from './vitrine/body-vitrine/body-vitrine.component';
import { AllvitrineComponent } from './vitrine/allvitrine/allvitrine.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { SidebarwikiComponent } from './wiki/sidebarwiki/sidebarwiki.component';
import { AddQuestionComponent } from './forum/add-question/add-question.component';
import { ShowMessageAnswersComponent } from './forum/show-message-answers/show-message-answers.component';
import { AddAnswerComponent } from './forum/add-answer/add-answer.component';
import { ForumComponent } from './forum/forum.component';
import { UpdateQuestionComponent } from './forum/update-question/update-question.component';
import { ModalPopupComponent } from './components/modal-popup/modal-popup.component';
@NgModule({
  declarations: [
    AppComponent,
    AllModificationWikiComponent,
    AllConsulterWikiComponent,
    NavbarComponent,
    BodyVitrineComponent,
    AllvitrineComponent,
    SidebarwikiComponent,
    AddQuestionComponent,
    ShowMessageAnswersComponent,
    AddAnswerComponent,
    ForumComponent,
    UpdateQuestionComponent,
    ModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
