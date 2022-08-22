import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header-components/header/header.component';

import {environment as env} from "../environments/environment";
import {AuthHttpInterceptor, AuthModule, HttpMethod} from '@auth0/auth0-angular';

import {AuthButtonComponent} from './header-components/auth-button/auth-button.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {ResumeComponent} from './resume-components/resume/resume.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './header-components/menu/menu.component';
import {UserComponent} from './user/user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoadingComponent} from './loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SocialLinksComponent} from './header-components/social-link-components/social-links/social-links.component';
import {SocialButtonComponent} from './header-components/social-link-components/social-button/social-button.component';

import {MatDialogModule} from "@angular/material/dialog";
import {
  MessageDialogFormComponent
} from './header-components/message-components/message-dialog-form/message-dialog-form.component';
import {MessageButtonComponent} from './header-components/message-components/message-button/message-button.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ResumePdfViewComponent} from './resume-components/resume-pdf-view/resume-pdf-view.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MessageViewComponent} from './message-componets/message-view/message-view.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {API_URL, BACK_END_URL} from "../environments/resume_spring_urls";
import {MessageCardComponent} from './message-componets/message-card/message-card.component';
import {AnswerDialogFormComponent} from './message-componets/answer-dialog-form/answer-dialog-form.component';
import {AnswerButtonComponent} from './message-componets/answer-button/answer-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthButtonComponent,
    ResumeComponent,
    MenuComponent,
    UserComponent,
    LoadingComponent,
    SocialLinksComponent,
    SocialButtonComponent,
    MessageDialogFormComponent,
    MessageButtonComponent,
    ResumePdfViewComponent,
    MessageViewComponent,
    MessageCardComponent,
    AnswerDialogFormComponent,
    AnswerButtonComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor:{
        allowedList:[
          {
            uri: `${API_URL}${BACK_END_URL.ENDPOINTS.MESSAGE}`,
            httpMethod:HttpMethod.Post,
            tokenOptions: {
              audience: env.auth.audience
            },
            allowAnonymous:true
          },
          {
            uri: `${API_URL}${BACK_END_URL.ENDPOINTS.MESSAGE}`,
            tokenOptions: {
              audience: env.auth.audience
            },
          },
          {
            uri: `${API_URL}${BACK_END_URL.ENDPOINTS.PUBLIC_MESSAGE}`,
            tokenOptions: {
              audience: env.auth.audience
            },
            allowAnonymous:true
          },
          {
            uri: `${API_URL}${BACK_END_URL.ENDPOINTS.MESSAGE}/*`,
            tokenOptions: {
              audience: env.auth.audience
            },
          },
        ]
      }
    }),
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    PdfViewerModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthHttpInterceptor,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
