import { Component, OnInit } from '@angular/core';
import { FinancaService } from 'src/service/financa.service';
import { Financas } from 'src/model/financas.model';
import { Financa } from 'src/model/financa.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { UserInfo } from 'src/model/userInfo';
import { take } from 'rxjs';
import { CategoryService } from 'src/service/categoryService';


@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.component.html',
  styleUrls: ['./detalhe-receita.component.scss']
})
export class DetalheReceitaComponent implements OnInit {

  listaReceita: Financas;
  receita: Financa;
  novaCategoria: string;
  idUser:number;
  user:UserInfo;

  constructor(
    private service: FinancaService,
    private userService: UserService,
    private categoryService: CategoryService,
    private readonly rota: ActivatedRoute) {}

  ngOnInit(){
    this.idUser = Number(this.rota.snapshot.paramMap.get("id"));
    this.userService.getUserById(this.idUser).subscribe((user: UserInfo) => {this.user = user});
  }

  atualizar(receita: Financa){
    this.receita = receita;
  }

  excluir(id:number){
    this.service.deleteFinanca(id).subscribe(()=> {
    alert('Receita excluída com sucesso.')
    }, (erro)=>{
        alert('Receita não pôde ser excluída.')
    },()=>{})
    }

    cadastrarCategoria(categoria: string){
      this.categoryService.createCategory(categoria, this.idUser, 2).subscribe((data)=>{
        alert("Categoria cadastrada com sucesso!");
      })
    }
}
