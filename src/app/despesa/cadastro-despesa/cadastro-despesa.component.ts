import { Component, OnInit } from '@angular/core';
import { FinancaService } from 'src/service/financa.service';
import { Financa } from 'src/model/financa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { UserInfo } from 'src/model/userInfo';
import { CategoryService } from 'src/service/categoryService';
import { Category } from 'src/model/category';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.scss']
})
export class CadastroDespesaComponent implements OnInit{

  idUser?: number;
  despesaForm?: FormGroup;
  despesa?: Financa;
  user: UserInfo;
  categoriasGlobais?:Category[];
  categoriasDoUsuario?: Category[];
  exists?:boolean;


  constructor(private formBuilder: FormBuilder,
    private readonly route: Router,
    private service:FinancaService,
    private readonly rota: ActivatedRoute,
    private categoryService: CategoryService,
    private location:Location
    ){}



  ngOnInit(): void {
    this.idUser = Number(this.rota.snapshot.paramMap.get("id"));
    this.exists=false
    this.getCategoriasGlobais();
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.getCategoriasGlobais();
    this.despesaForm = this.formBuilder.group({
    categoria: [null, Validators.required],
    valor: [null, Validators.required],
    data: [null, [Validators.required]
  ]
  })
  }

  criar(){
    this.despesa = {
      idUser: this.idUser,
      tipo:  1,
      valor: this.despesaForm.get("valor").value,
      categoria: this.despesaForm.get("categoria").value,
      dataMovimentacao: this.despesaForm.get("data").value,
    };
    this.service
    .postFinancas(this.despesa)
    .subscribe( () => this.route.navigate(['/detalhe-despesa/'+this.idUser]));
  }

  getCategoriasGlobais(){
    this.categoryService.getCategories(this.idUser, 1).subscribe((data)=>{
      this.categoriasGlobais = data.categoriasGlobais;
      this.categoriasDoUsuario = data.categoriasDoUsuario;
      this.exists = true;
    }, err => {
      console.log("erro", err);
    })
  }

  voltar(){
    this.location.back()
  }
}


