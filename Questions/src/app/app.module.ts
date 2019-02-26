import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';

import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './question/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    PersonalinformationComponent,
    ButtonComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
