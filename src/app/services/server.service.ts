import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    const body = urlSearchParams.toString();

    return this.http.post('api/auth/login/', body);
  }

  getIssues() {
    return this.http.get('/issues/');
  }

}
