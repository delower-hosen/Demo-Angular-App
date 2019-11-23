import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from './../../Interfaces/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  // baseUrl = 'http://localhost:53024/api/auth/';
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  decodeToken: any;

  constructor(
    private http: HttpClient
  ) { }

  public login(model: User) {
    return this.http.post(this.baseUrl + 'auth/login', model)
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
    return this.http.post(this.baseUrl + 'auth/register', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            console.log('register succussful!');
          }
        })
      );
  }

  public getMemberList() {
    return this.http.get(this.baseUrl + 'users')
      .pipe(
        map((response: any) => {
          const users = response;
          return users;
        })
      );
  }

  public getMember(userId: string) {
    return this.http.get(this.baseUrl + 'users/' + userId)
    .pipe(
      map((response: any) => {
        const userInfo = response;
        return userInfo;
      })
    );
  }

  public getPhotoConnection(itemId: string) {
    const url = this.baseUrl + 'connections/' + `${itemId}`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        const userInfo = response;
        return userInfo;
      })
    );
  }

  public getPhotos(itemId: string) {
    const url = this.baseUrl + 'photos/' + `${itemId}`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        const photoInfo = response;
        return photoInfo;
      })
    );
  }

  public updateUser(userInfo: any, itemId: string) {
    const url = this.baseUrl + 'users/' + `${itemId}`;
    return this.http.put(url, userInfo)
    .pipe(
      map((response: any) => {
        const photoInfo = response;
        return photoInfo;
      })
    );
  }
}
