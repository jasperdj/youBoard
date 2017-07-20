import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
const successColor = 'green';
const errorColor = 'red';

@Component({
  selector: 'app-target-page-metric',
  templateUrl: './target-page-metric.component.html',
  styleUrls: ['./target-page-metric.component.less']
})
export class TargetPageMetricComponent implements OnInit {
  @Input() score: number;
  @Input() goalScore: number;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() metric: string;
  @Input() weekGraph: [number];

  scoreChart;

  chartOptions: any = {
    responsive: true,
    legend: false
  };

  chartLabels: string[] = ['Completed', 'Rest'];
  doughnutGraphColors: any[] = [{backgroundColor: [successColor, errorColor]}];
  lineChartLabels: Array<any> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  lineGraphColor: any[] = [
    { // grey
      backgroundColor: 'lightgray',
      pointBorderWidth: 4
    }
  ];


  constructor() {

  }

  ngOnInit() {
    let rest = (this.goalScore - this.score);
    this.scoreChart = [this.score, rest > 0 ? rest : 0];
    this.generateLineGraphPointColors();
  }

  private generateLineGraphPointColors() {
    const lineGraphPointColors = [];
    for (const point of this.weekGraph) {
      if (point > this.goalScore) {
        lineGraphPointColors.push(successColor);
      } else {
        lineGraphPointColors.push(errorColor);
      }
    }

    this.lineGraphColor = [
      { // grey
        backgroundColor: 'lightgray',
        borderColor: lineGraphPointColors,
        pointBackgroundColor: lineGraphPointColors,
        pointBorderColor: lineGraphPointColors,
        pointHoverBackgroundColor: lineGraphPointColors,
        pointHoverBorderColor: lineGraphPointColors,
        pointBorderWidth: 4
      }];
  }

}
