import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IssuePageComponent} from './issue-page/issue-page.component';
import {ServerPageComponent} from './server-page/server-page.component';
import {ApplicationPageComponent} from 'app/application-page/application-page.component';
import {LoginPageComponent} from "./login-page/login-page.component";

const routes: Routes = [
 {
    path: 'issues',
    component: IssuePageComponent
  }, {
    path: 'login',
    component: LoginPageComponent
  }, {
    path: 'servers',
    component: ServerPageComponent
  }, { path: '',
    redirectTo: '/issues',
    pathMatch: 'full'
  }, {
    path: 'applicaties',
    component: ApplicationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
