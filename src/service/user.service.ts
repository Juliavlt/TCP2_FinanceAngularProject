import { User } from './../model/user';
import { HttpClient, HttpHeaderResponse, HttpParams, HttpResponse } from '@angular/common/http';
import {  catchError, Observable, throwError } from 'rxjs';
import { UserInfo } from 'src/model/userInfo';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private location: Location) {}

  baseUrlAuthenticate = 'http://localhost:8080/SC3008487/user/authenticate';
  baseUrl = 'http://localhost:8080/SC3008487/user';

  public getUser(username: string, password: string): Observable<any> {
    const param = new HttpParams()
    .set('user', username)
    .set('pass', password);
    const options = { params: param };
    return this.http.get(this.baseUrlAuthenticate, options)
    .pipe(catchError((err) => {
      alert(err.error)
      this.location.back();
      return throwError(err);
    }))
  }

  public getUserById(userId: string): Observable<UserInfo> {
    return this.http.get(this.baseUrl + '/' + userId)
    .pipe(catchError((err) => {
      console.log(err.error)
      alert(err.error.erro)
      this.location.back();
      return throwError(err);
    }))
  }

  public createUser(user: User): Observable<any> {
    let body = new HttpParams();
    body = body.set('user', String(user.username));
    body = body.set('pass', user.password);
    return this.http.post(this.baseUrl, user)
    .pipe(catchError((err) => {
      alert(err.error)
      this.location.back();
      return throwError(err);
    }))
  }
}
