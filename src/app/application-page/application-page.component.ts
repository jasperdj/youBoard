import { Component, OnInit } from '@angular/core';
import {ServerService} from '../services/server.service';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.less']
})
export class ApplicationPageComponent implements OnInit {
  nodes = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getApplicationNodes()
      .subscribe(
        (response) => {
          this.nodes = response.json();
          console.log(this.nodes);
        },
        (error) => console.log(error)
      );
  }

}
