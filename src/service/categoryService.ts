import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Categories } from "src/model/categories";
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private location:Location) {}

  baseUrlCategory = 'http://localhost:8080/SC3008487/category';

public createCategory(categoria: string, idUser: string, tipo:number): Observable<any> {
  let body = new HttpParams();
  body = body.set('categoria', categoria);
  body = body.set('tipo', tipo)
  body = body.set('idUser', idUser);
  return this.http.post(this.baseUrlCategory, body)
  .pipe(catchError((err) => {
    alert(err.error)
    return throwError(err);
  }))
}

public getCategories(idUser:number, tipo:number): Observable<Categories> {
  const param = new HttpParams()
  .set('tipo', tipo)
  .set('idUser', idUser);
  const options = { params: param };
  return this.http.get(this.baseUrlCategory, options)
  .pipe(catchError((err) => {
    alert(err.error)
    this.location.back();
    return throwError(err);
  }))
}

}
