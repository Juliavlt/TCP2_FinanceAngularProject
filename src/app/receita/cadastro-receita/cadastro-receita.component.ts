import { Categories } from 'src/model/categories';
import { UserInfo } from './../../../model/userInfo';
import { Component, Input, OnInit } from '@angular/core';
import { FinancaService } from 'src/service/financa.service';
import { Financa } from 'src/model/financa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { UserService } from 'src/service/user.service';
import { Category } from 'src/model/category';


@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.component.html',
  styleUrls: ['./cadastro-receita.component.scss']
})
export class CadastroReceitaComponent implements OnInit{

constructor(  private readonly rota: ActivatedRoute,
  private formBuilder: FormBuilder,
  private readonly route: Router,
  private service:FinancaService,
  private userService: UserService,
  private location:Location){}

idUser?: number;
receitaForm?: FormGroup;
receita?: Financa;
categoriasGlobais?: Category[];
categoriasDoUsuario?: Category[];
exists?:boolean;

ngOnInit(): void {
  this.idUser = Number(this.rota.snapshot.paramMap.get("id"));
  this.exists=false
  this.getCategoriasGlobais();
  this.configurarFormulario();
}

configurarFormulario(){
  this.getCategoriasGlobais();
  this.receitaForm = this.formBuilder.group({
    categoria: [null, Validators.required],
    valor: [null, Validators.required],
    data: [null, [Validators.required]
  ]
  })
}

getCategoriasGlobais(){
  this.userService.getCategories(this.idUser, 2).subscribe((data)=>{
    this.categoriasGlobais = data.categoriasGlobais;
    this.categoriasDoUsuario = data.categoriasDoUsuario;
    this.exists = true;
    console.log(data)
  })

}

criar(){
  this.receita = {
      idUser: this.idUser,
      tipo:  2,
      valor: this.receitaForm.get("valor").value,
      categoria: this.receitaForm.get("categoria").value,
      dataMovimentacao: this.receitaForm.get("data").value
    };

    this.service
    .postFinancas(this.receita)
    .subscribe( () => this.route.navigate(['/detalhe-receita/'+this.idUser]));
}

voltar(){
  this.location.back()
}



}
