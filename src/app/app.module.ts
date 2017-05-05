import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {IssuePageComponent} from './issue-page/issue-page.component';
import {ServerPageComponent} from './server-page/server-page.component';
import {ApplicationPageComponent} from './application-page/application-page.component';
import {ServerService} from "./services/server.service";
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthenticatedHttpService} from "./services/AuthenticatedHttpService.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuePageComponent,
    ServerPageComponent,
    ApplicationPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ServerService,  { provide: Http, useClass: AuthenticatedHttpService }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
