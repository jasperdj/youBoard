import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IssuePageComponent} from './issue-page/issue-page.component';
import {ServerPageComponent} from './server-page/server-page.component';
import {ApplicationPageComponent} from 'app/application-page/application-page.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import {TargetPageComponent} from "./target-page/target-page.component";

const routes: Routes = [
 {
    path: 'targets',
    component: TargetPageComponent
  }, {
    path: 'login',
    component: LoginPageComponent
  }, {
    path: 'servers',
    component: ServerPageComponent
  }, { path: '',
    redirectTo: '/targets',
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
