import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { TestComponent } from './question/test/test.component';

const appRoutes: Routes = [
  { path: '', component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
