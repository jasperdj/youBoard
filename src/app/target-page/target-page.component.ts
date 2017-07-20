import {Component, OnInit} from '@angular/core';
import {RescuetimeService} from '../services/rescuetime.service';


@Component({
  selector: 'app-target-page',
  templateUrl: './target-page.component.html',
  styleUrls: ['./target-page.component.less']
})
export class TargetPageComponent implements OnInit {
  serverService: RescuetimeService;

  metrics = {
    rescuetime: {
      title: 'Productivity', subtitle: 'Percentage of time spend productive behind the laptop.', units: '%',
      goal: 80, data: null
    }
  };

  constructor(serverService: RescuetimeService) {
    this.serverService = serverService;
  }

  ngOnInit() {
    this.serverService.getRescueTimeProductivityScoreAggregation(this.metrics.rescuetime.goal).subscribe(
      response => {
        this.metrics.rescuetime.data = response;
        console.log(this.metrics);
      }
    );
  };

  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return obj[key];
    });
  }
}
