import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Financa,} from 'src/model/financa.model';
import { Financas } from 'src/model/financas.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancaService {

  baseUrl = "http://localhost:8080/SC3008487/financial";

  constructor(private http: HttpClient) { }

  showMessage(msg: string): void{
    alert("Sucesso");
  }

  postFinancas(financa: Financa): Observable<Financa>{
    let body = new HttpParams();
    body = body.set("tipo", String(financa.tipo));
    body = body.set("categoria", financa.categoria);
    body = body.set("dataMovimentacao", financa.dataMovimentacao);
    body = body.set("valor", financa.valor);
    return this.http.post(this.baseUrl, financa)
  }

  updateFinancas(id:number,financa: Financa): Observable<Financa>{
    let body = new HttpParams();
    body = body.set("tipo", String(financa.tipo));
    body = body.set("categoria", financa.categoria);
    body = body.set("dataMovimentacao", financa.dataMovimentacao);
    body = body.set("valor", financa.valor);
    return this.http.put(this.baseUrl+"/"+id, financa)
  }
  getFinancas(idUser:number):Observable<any>{
    return this.http.get<Financas>(this.baseUrl+"/"+idUser);
  }

  getFinanca(id:number): Observable<Financa>{
    return this.http.get<Financa>(this.baseUrl +"/"+ id)
  }

  deleteFinanca(id:number): Observable<Financa>{
    return this.http.delete<Financa>(this.baseUrl +"/"+ id)
}
}
