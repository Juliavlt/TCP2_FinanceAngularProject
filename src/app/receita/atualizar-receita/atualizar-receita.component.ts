import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Financa } from 'src/model/financa.model';
import { FinancaService } from 'src/service/financa.service';
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/model/category';
import { CategoryService } from 'src/service/categoryService';

@Component({
  selector: 'app-atualizar-receita',
  templateUrl: './atualizar-receita.component.html',
  styleUrls: ['./atualizar-receita.component.scss']
})
export class AtualizarReceitaComponent implements OnInit {

  receita?: Financa = {id:0, idUser: 0, tipo:0, categoria:"", dataMovimentacao: "", valor:0};
  idFinanca?: number;
  idUser?: number;
  receitaForm?: FormGroup;
  exists:boolean = false;
  categoriasGlobais?:Category[];
  categoriasDoUsuario?: Category[];

  constructor(
    private readonly rota: ActivatedRoute,
    private location:Location,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private service:FinancaService){}

  idDespesaToUpdate:number;

  ngOnInit(): void {
    this.idFinanca = Number(this.rota.snapshot.paramMap.get("id"));
    this.idUser = Number(localStorage.getItem("id"));
    this.getCategoriasGlobais();
    this.getReceita(this.idFinanca);
  }

  getReceita(id:number){
    this.service.getFinanca(id).subscribe((receita: Financa) => {
      this.receita = receita
      this.configurarFormulario();
      this.exists = true;
    });
  }


  configurarFormulario(){
    this.receitaForm = this.formBuilder.group({
      categoria: [this.receita.categoria, Validators.required],
      valor: [this.receita.valor, Validators.required],
      data: [this.receita.dataMovimentacao, [Validators.required]
    ]
    })
  }

  atualizar(){
    const receita = {
      idUser: 1,
      tipo:  2,
      valor: this.receitaForm.get("valor").value,
      categoria: this.receitaForm.get("categoria").value,
      dataMovimentacao: this.receitaForm.get("data").value
    };

    this.service.updateFinancas(this.idFinanca, receita).subscribe((receita: Financa) => {
      this.receita = receita
      this.location.back()
      alert('Receita atualizada com sucesso :)')
     })
    }

    getCategoriasGlobais(){
      this.categoryService.getCategories(this.idUser, 2).subscribe((data)=>{
        this.categoriasGlobais = data.categoriasGlobais;
        this.categoriasDoUsuario = data.categoriasDoUsuario;
      })
    }

  voltar(){
    this.location.back()
  }

}
