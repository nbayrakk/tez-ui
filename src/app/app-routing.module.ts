import { EndComponent } from './end/end.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'questions/:id', component: QuestionsComponent },
  { path: 'ap', component: AnotherPageComponent },
  { path: 'end', component: EndComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
