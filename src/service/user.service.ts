import { User } from './../model/user';
import { HttpClient, HttpHeaderResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, Observable, throwError } from 'rxjs';
import { UserInfo } from 'src/model/userInfo';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private location: Location) {}

  baseUrlAuthenticate = 'http://localhost:8080/SC3008487/user/authenticate';
  baseUrl = 'http://localhost:8080/SC3008487/user';

  public getUser(username: string, password: string): Observable<UserInfo> {
    const param = new HttpParams()
    .set('user', username)
    .set('pass', password);
    const options = { params: param };
    return this.http.get(this.baseUrlAuthenticate, options)
    .pipe(catchError((err) => {
      let erro = this.verifyError(err);
      alert(erro)
      this.location.back();
      return throwError(err);
    }))
  }

  public getUserById(userId: number): Observable<UserInfo> {
    return this.http.get(this.baseUrl + '/' + userId)
    .pipe(catchError((err) => {
      let erro = this.verifyError(err);
      alert(erro)
      this.location.back();
      return throwError(err);
    }))
  }

  public createUser(user: User): Observable<UserInfo> {
    let body = new HttpParams();
    body = body.set('user', String(user.username));
    body = body.set('pass', user.password);
    return this.http.post(this.baseUrl, user)
    .pipe(catchError((err) => {
      let erro = this.verifyError(err);
      alert(erro)
      this.location.back();
      return throwError(err);
    }))
  }

  verifyError(error): string{
    return error.error.erro;
  }
}
