import { Component, OnInit } from '@angular/core';
import {ServerService} from 'app/services/server.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  serverService: ServerService;

  constructor(serverService: ServerService) { this.serverService = serverService; }

  ngOnInit() {
  }

  onSubmit(form) {
    this.serverService.login(form.value.username, form.value.password)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
  }

}
