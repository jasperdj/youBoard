import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('api/auth/login/', 'username=' + username + '&password=' + password, options);
  }

  getIssues() {
    return this.http.get('api/issues/');
  }

}
