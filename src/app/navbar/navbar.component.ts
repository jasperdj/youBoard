import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  router: Router;

  title = 'EDH Dashboard';

  links = [{label: 'Issues', url: '/issues'}, {label: 'Servers', url: '/servers'}, {label: 'Applicaties', url: '/applicaties'}];

  constructor(private _router: Router ) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
