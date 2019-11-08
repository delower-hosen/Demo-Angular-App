import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from './../../Interfaces/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  baseUrl = 'http://localhost:53024/api/auth/';
  jwtHelper = new JwtHelperService();
  decodeToken: any;

  constructor(
    private http: HttpClient
  ) { }

  public login(model: User) {
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodeToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
  }

  public register(model: User) {
    return this.http.post(this.baseUrl + 'register', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            console.log('register succussful!');
          }
        })
      );
  }
}
