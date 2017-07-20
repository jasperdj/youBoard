import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, RequestOptionsArgs} from '@angular/http';

@Injectable()
export class RescuetimeService {

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

    getRescueTimeProductivityScoreAggregation(goal_productivityScore) {
    return this.getRescueTimeProductivityScore().map(response => {
      let productivityScores = <Array<number>> response.json().rows;
      console.log(productivityScores);
      productivityScores = productivityScores.map(a => a[4]);
      const productivityScore = productivityScores.reduce((a, b) => a + b) / productivityScores.length;

      const relativeProductivityScore = productivityScore * 100;
      let restNumber = 0;
      if (relativeProductivityScore < goal_productivityScore) {
        restNumber = 100 - (relativeProductivityScore / goal_productivityScore);
      }
      const totalGraph = [relativeProductivityScore / goal_productivityScore, restNumber];

      return {score: productivityScore, goal: goal_productivityScore, totalGraph: totalGraph, weekGraph: productivityScores};
    });
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
