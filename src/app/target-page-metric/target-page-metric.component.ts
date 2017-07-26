import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
const successColor = 'green';
const errorColor = 'red';
const restColor = 'gray';

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
  @Input() weekGraph;
  @Input() type: string;

  scoreChart;
  weekGraphGuide = [];

  chartOptions: any = {
    responsive: true,
    legend: false
  };

  chartLabels: string[] = ['Completed', 'Missing', 'Rest'];
  doughnutGraphColors: any[] = [{backgroundColor: [successColor, errorColor, restColor]}];
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
    var sumGoal = 0;
    var sumScore = 0;

    for (var i = 0; i < 7; i++) {
      let point = null;
      let lastPoint = false;
      if (i < this.weekGraph.length) {
        point = this.weekGraph[i];
        if (i == this.weekGraph.length - 1) {
          lastPoint = true;
        }
      }

      if (this.type === 'avg') {
        this.weekGraphGuide.push(this.goalScore);

        if (point) {
          if (point > this.goalScore) {
            lineGraphPointColors.push(successColor);
          } else {
            lineGraphPointColors.push(errorColor);
          }
        }
      }

      if (this.type === 'sum') {
        sumGoal += this.goalScore / 7;
        this.weekGraphGuide.push(sumGoal);

        if (point) {
          sumScore += point;
          this.weekGraph[i] = sumScore;

          if (lastPoint && sumScore < sumGoal) {
            let restToday = sumGoal - sumScore;
            let totalRest = this.goalScore - restToday - this.score;
            this.scoreChart = [this.score, restToday > 0 ? restToday : 0, totalRest > 0 ? totalRest : 0];
          }

          if (sumScore > sumGoal) {
            lineGraphPointColors.push(successColor);
          } else {
            lineGraphPointColors.push(errorColor);
          }
        }
      }

    }

    this.weekGraph = [this.weekGraph, this.weekGraphGuide];

    this.lineGraphColor = [
      { // grey
        backgroundColor: 'lightgray',
        borderColor: lineGraphPointColors,
        pointBackgroundColor: lineGraphPointColors,
        pointBorderColor: lineGraphPointColors,
        pointHoverBackgroundColor: lineGraphPointColors,
        pointHoverBorderColor: lineGraphPointColors,
        pointBorderWidth: 4
      },
      { // guide
        backgroundColor: 'rgba(0,0,0,0)',
        pointBorderWidth: 4
      }
    ];
  }

}
