import {Component, Injectable, OnInit} from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {RescuetimeService} from '../services/rescuetime.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.less']
})

@Injectable()
export class IssuePageComponent implements OnInit {
  issues = [];
  serverService: RescuetimeService;

  constructor(private http: Http, private serviceService: RescuetimeService) {
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
