import { Component, OnInit } from '@angular/core';
import {RescuetimeService} from '../services/rescuetime.service';
import {Observable} from 'rxjs';
import { TargetPageMetricComponent } from '../target-page-metric/target-page-metric.component';


@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.less'],

})
export class ApplicationPageComponent implements OnInit {
  nodes = [];

  constructor(private serverService: RescuetimeService) { }

  ngOnInit() {
    const apiCallTimer = Observable.timer(0, 10000);
    apiCallTimer.subscribe(
      t => {

        this.serverService.getApplicationNodes()
          .subscribe(
            (response) => {
              this.nodes = response.json();
              console.log(this.nodes);
            },
            (error) => console.log(error)
          );

      }
    );
  }

}
