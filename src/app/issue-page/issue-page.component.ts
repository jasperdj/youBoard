import {Component, Injectable, OnInit} from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ServerService} from '../services/server.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.less']
})

@Injectable()
export class IssuePageComponent implements OnInit {
  issues = [];
  serverService: ServerService;

  constructor(private http: Http, private serviceService: ServerService) {
    this.serverService = serviceService;
  }

  ngOnInit() {
    const apiCallTimer = Observable.timer(0, 10000);
    apiCallTimer.subscribe(

      t => {
        this.serverService.getIssues().subscribe(
          (response) => {
            this.issues = response.json();
            console.log(this.issues);
          },
          (error) => console.log(error)
        );
      }

    );
  }
}
