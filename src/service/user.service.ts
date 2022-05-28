import { User } from './../model/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/model/userInfo';
import { Categories } from 'src/model/categories';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrlAuthenticate = 'http://localhost:8080/SC3008487/user/authenticate';
  baseUrl = 'http://localhost:8080/SC3008487/user';
  baseUrlCategory = 'http://localhost:8080/SC3008487/category';

  public getUser(username: string, password: string): Observable<UserInfo> {
    const param = new HttpParams()
    .set('user', username)
    .set('pass', password);
    const options = { params: param };
    return this.http.get(this.baseUrlAuthenticate, options);
  }

  public getUserById(userId: number): Observable<UserInfo> {
    return this.http.get(this.baseUrl + '/' + userId);
  }

  public createUser(user: User): Observable<User> {
    let body = new HttpParams();
    body = body.set('user', String(user.username));
    body = body.set('pass', user.password);
    return this.http.post(this.baseUrl, user);
  }

  public createCategory(categoria: string, idUser: number, tipo:number): Observable<any> {
    let body = new HttpParams();
    body = body.set('categoria', categoria);
    body = body.set('tipo', tipo)
    body = body.set('idUser', idUser);
    return this.http.post(this.baseUrlCategory, body);
  }

  public getCategories(idUser:number, tipo:number): Observable<any> {
    const param = new HttpParams()
    .set('tipo', tipo)
    .set('idUser', idUser);
    const options = { params: param };
    return this.http.get(this.baseUrlCategory, options);
  }
}
