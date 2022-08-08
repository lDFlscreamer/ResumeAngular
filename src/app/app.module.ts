import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header-components/header/header.component';

import {environment as env} from "../environments/environment";
import {AuthModule} from '@auth0/auth0-angular';

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
import {HttpClientModule} from "@angular/common/http";
import {LoadingComponent} from './loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SocialLinksComponent } from './header-components/social-link-components/social-links/social-links.component';
import { SocialButtonComponent } from './header-components/social-link-components/social-button/social-button.component';

import {MatDialogModule} from "@angular/material/dialog";
import { MessageDialogFormComponent } from './header-components/message-components/message-dialog-form/message-dialog-form.component';
import { MessageButtonComponent } from './header-components/message-components/message-button/message-button.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

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
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      ...env.auth,
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
