import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./resume/resume.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: '', component: ResumeComponent, pathMatch: 'full'},
  {path: 'resume', component: ResumeComponent},
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
