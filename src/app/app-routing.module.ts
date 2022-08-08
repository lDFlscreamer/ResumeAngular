import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./resume-components/resume/resume.component";
import {UserComponent} from "./user/user.component";
import {AuthGuard} from "@auth0/auth0-angular";

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    pathMatch: 'full'
  },
  {
    path: 'resume',
    component: ResumeComponent
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
