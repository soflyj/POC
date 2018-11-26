import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { PersonalinformationComponent } from './questions/personalinformation/personalinformation.component';
import { FreetextComponent } from './questions/freetext/freetext.component';
import { ButtonComponent } from './questions/button/button.component';
import { SliderComponent } from './questions/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    PersonalinformationComponent,
    FreetextComponent,
    ButtonComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
