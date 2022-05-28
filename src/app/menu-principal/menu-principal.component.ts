import { UserInfo } from './../../model/userInfo';
import { Financa } from 'src/model/financa.model';
import { Component, OnInit, Input } from '@angular/core';
import { FinancaService } from 'src/service/financa.service';
import { Financas } from 'src/model/financas.model';
import { UserService } from 'src/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {


  listaFinancas: Financas;
  user: UserInfo;
  idUser: number;

  constructor(
    private service: FinancaService,
    private userService: UserService,
    private readonly rota: ActivatedRoute,
    ) {}

  ngOnInit(){
    this.idUser = Number(this.rota.snapshot.paramMap.get("id"));
    this.service.getFinancas(this.idUser).subscribe((financas: any) => {
      this.listaFinancas = financas;
    console.log(this.user)
    });
    this.getUserInfos()
  }

  getUserInfos(){
    this.userService.getUserById(this.idUser).subscribe((financas: any) => {
      this.user = financas;
    });
  }
}
