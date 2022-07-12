import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AuthModule} from '@auth0/auth0-angular';
import {AuthButtonComponent} from './auth-button/auth-button.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCardModule} from "@angular/material/card";
import {ResumeComponent} from './resume/resume.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './menu/menu.component';
import {UserComponent} from './user/user.component';
import {LinksComponent} from './links/links.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthButtonComponent,
    ResumeComponent,
    MenuComponent,
    UserComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-rd1axuv2.us.auth0.com',
      clientId: 'SkzVwd3mKMO2uOJCP7ocKv5I6aDCkpec'
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
