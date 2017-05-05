import { Component } from '@angular/core';
import {ServerService} from 'app/services/server.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})

export class LoginPageComponent  {
  serverService: ServerService;
  router: Router;
  error = false;

  constructor(serverService: ServerService, router: Router) {
    this.serverService = serverService;
    this.router = router;
  }

  onSubmit(form) {
    this.serverService.login(form.value.username, form.value.password)
      .subscribe(
        (response) =>   this.router.navigate(['/issues']),
        (error) =>      this.error = true
    );
  }

}
