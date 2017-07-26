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
    productivity: {
      title: 'Productivity', subtitle: 'Percentage of time spend productive behind the laptop.', units: '%',
      goal: 80, data: null, type: 'avg'
    },
    timeSpend: {
      title: 'Time spend working', subtitle: 'Amount of time spend behind the laptop.', units: ' hours',
      goal: 35, data: null, type: 'sum'
    }
  };

  constructor(serverService: RescuetimeService) {
    this.serverService = serverService;
  }

  ngOnInit() {
    this.serverService.getRescueTimeProductivityScoreAggregation(this.metrics.productivity.goal, this.metrics.timeSpend.goal).subscribe(
      response => {
        this.metrics.productivity.data = response.productivityMetrics;
        this.metrics.timeSpend.data = response.spendTimeMetrics;
      }
    );
  };

  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return obj[key];
    });
  }
}
