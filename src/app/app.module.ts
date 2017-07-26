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
import {RescuetimeService} from './services/rescuetime.service';
import { LoginPageComponent } from './login-page/login-page.component';
import {AuthenticatedHttpService} from './services/AuthenticatedHttpService.service';
import { TargetPageComponent } from './target-page/target-page.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TargetPageMetricComponent } from './target-page-metric/target-page-metric.component';

import { PopoverModule } from 'ng2-bootstrap';
import { SuiPopupModule } from 'ng2-semantic-ui';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuePageComponent,
    ServerPageComponent,
    ApplicationPageComponent,
    LoginPageComponent,
    TargetPageComponent,
    TargetPageMetricComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    PopoverModule.forRoot(),
    SuiPopupModule
  ],
  providers: [RescuetimeService,  { provide: Http, useClass: AuthenticatedHttpService }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
