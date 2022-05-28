import { Component, OnInit } from '@angular/core';
import { FinancaService } from 'src/service/financa.service';
import { Financas } from 'src/model/financas.model';
import { Financa } from 'src/model/financa.model';
import { UserInfo } from 'src/model/userInfo';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/service/user.service';


@Component({
  selector: 'app-detalhe-despesa',
  templateUrl: './detalhe-despesa.component.html',
  styleUrls: ['./detalhe-despesa.component.scss']
})
export class DetalheDespesaComponent implements OnInit {

  despesa: Financa;
  novaCategoria: string;
  user: UserInfo;
  idUser:number;

  constructor(
    private service: FinancaService,
    private userService: UserService,
    private readonly rota: ActivatedRoute) {}

  ngOnInit(){
    this.idUser = Number(this.rota.snapshot.paramMap.get("id"));
    this.userService.getUserById(this.idUser).subscribe((user: UserInfo) => {this.user = user});
  }

  atualizar(despesa: Financa){
    this.despesa = despesa;
  }

  excluir(id:number){
    this.service.deleteFinanca(id).subscribe(()=> {
    alert('Usuario excluido com sucesso.')
  }, (erro)=>{
      alert('Despesa não pôde ser excluída.')
  },()=>{})
  }

  cadastrarCategoria(categoria: string){
    this.userService.createCategory(categoria, this.idUser, 1);
  }
}
