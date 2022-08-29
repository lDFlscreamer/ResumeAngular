import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./resume-components/resume/resume.component";
import {UserComponent} from "./user/user.component";
import {AuthGuard} from "@auth0/auth0-angular";
import {ResumePdfViewComponent} from "./resume-components/resume-pdf-view/resume-pdf-view.component";
import {MessageViewComponent} from "./message-componets/message-view/message-view.component";

const routes: Routes = [
  {
    path: '',
    component: ResumePdfViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'resume-form/pdfs',
    component: ResumePdfViewComponent
  },
  {
    path: 'message',
    component: MessageViewComponent
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
