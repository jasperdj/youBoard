import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IssuePageComponent} from './issue-page/issue-page.component';
import {ServerPageComponent} from './server-page/server-page.component';
import {ApplicationPageComponent} from 'app/application-page/application-page.component';

const routes: Routes = [
  {
    path: '',
    children: []
  }, {
    path: 'issues',
    component: IssuePageComponent
  }, {
    path: 'servers',
    component: ServerPageComponent
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
