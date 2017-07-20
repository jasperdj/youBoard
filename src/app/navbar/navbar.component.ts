import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  router: Router;

  title = 'YouBoard';

  links = [{label: 'Targets', url: '/targets'}];

  constructor(private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
