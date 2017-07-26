import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, RequestOptionsArgs} from '@angular/http';

@Injectable()
export class RescuetimeService {

  rescueTimeStats;

  constructor(private http: Http) {
  }

  getFirstMondayOfTheWeek(): Date {
    const d = new Date(new Date());
    const day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  formatDateToString(date: Date): String {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

  getRescueTimeProductivityScore() {
    return this.http.get('rescuetime/anapi/data?' +
      'key=' + 'B63j1rsbSUWHifb2hCzYOPfDj2JAVY6Ckpqlc1pQ' + '&' +
      'perspective=interval&' +
      'restrict_kind=efficiency&' +
      'resolution_time=day&' +
      'restrict_begin=' + this.formatDateToString(this.getFirstMondayOfTheWeek()) + '&' +
      'restrict_end=' + this.formatDateToString(new Date()) + '&' +
      'format=json');
  }

  getRescueTimeProductivityScoreAggregation(goal_productivityScore, goal_spendTimeHours) {
    return this.getRescueTimeProductivityScore().map(response => {
      const rescuetimeStats = <Array<number>> response.json().rows;
      console.log(rescuetimeStats);

      return { spendTimeMetrics: this.getSpendTimeMetrics(rescuetimeStats, goal_spendTimeHours),
              productivityMetrics: this.getProductivityMetrics(rescuetimeStats, goal_productivityScore)};
    });
  }

  private getSpendTimeMetrics(rescuetimeStats: Array<number>, goal_spendTimeHours) {
    const spendHoursByDay = rescuetimeStats.map(a => a[1] / 3600);
    console.log(spendHoursByDay);
    const totalSpendHours = spendHoursByDay.reduce((a, b) => a + b);

    const rest = goal_spendTimeHours - totalSpendHours;
    const totalGraph = [totalSpendHours, rest > 0 ? rest : 0];

    return {
      score: totalSpendHours,
      totalGraph: totalGraph,
      weekGraph: spendHoursByDay
    };
  }

  private getProductivityMetrics(rescuetimeStats: Array<number>, goal_productivityScore) {
    const productivityScores = rescuetimeStats.map(a => a[4]);
    const averageProductivityScore = productivityScores.reduce((a, b) => a + b) / productivityScores.length;

    const relativeProductivityScore = averageProductivityScore * 100;
    let restNumber = 0;
    if (relativeProductivityScore < goal_productivityScore) {
      restNumber = 100 - (relativeProductivityScore / goal_productivityScore);
    }
    const totalGraph = [relativeProductivityScore / goal_productivityScore, restNumber];

    return {
      score: averageProductivityScore,
      totalGraph: totalGraph,
      weekGraph: productivityScores
    };
  }


  login(username: string, password: string) {
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers: headers});
    return this.http.post('api/auth/login/', 'username=' + username + '&password=' + password, options);
  }

  getIssues() {
    return this.http.get('api/issues/');
  }

  getApplicationNodes() {
    return this.http.get('api/gateways/');
  }

}
