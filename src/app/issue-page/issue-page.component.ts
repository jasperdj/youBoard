import {Component, Injectable, OnInit} from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.less']
})

@Injectable()
export class IssuePageComponent implements OnInit {

  constructor(private http: Http) {
    console.log(this.getUser());
  }

  getUser() {
    return this.http.get(`api/test`)
      .map((res: Response) => res.json());
  }

  getIssues() {
    return [{
      canBeAccepted: false,
      datetime: '23-06-2017 12:23',
      description: 'Database is offline',
      source: 'Aggregator node'
    },
    {
      canBeAccepted: true,
      datetime: '23-06-2017 12:23',
      description: 'Database is online',
      source: 'Aggregator node'
    }];
  }

  ngOnInit() {
  }

}
