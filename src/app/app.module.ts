import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OriginalComponent } from './questions/original/original.component';
import { LikeComponent } from './questions/like/like.component';
import { TrustlyComponent } from './questions/trustly/trustly.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    OriginalComponent,
    LikeComponent,
    TrustlyComponent,
    AnotherPageComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
