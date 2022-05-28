import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Financa } from 'src/model/financa.model';
import { FinancaService } from 'src/service/financa.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-atualizar-receita',
  templateUrl: './atualizar-receita.component.html',
  styleUrls: ['./atualizar-receita.component.scss']
})
export class AtualizarReceitaComponent implements OnInit {

  receita?: Financa = {id:0, idUser: 0, tipo:0, categoria:"", dataMovimentacao: "", valor:0};
  idFinanca?: number;

  constructor(
    private readonly rota: ActivatedRoute,
    private location:Location,
    private service:FinancaService){}

  idDespesaToUpdate:number;

  ngOnInit(): void {
    this.idFinanca = Number(this.rota.snapshot.paramMap.get("id"));
    this.getReceita(this.idFinanca);
  }

  getReceita(id:number){
    this.service.getFinanca(id).subscribe((receita: Financa) => {
      this.receita = receita
    });
  }

  atualizar(){
    const receita = {
      idUser: 1,
      tipo:  2,
      valor: this.receita.valor,
      categoria: this.receita.categoria,
      dataMovimentacao: this.receita.dataMovimentacao
    };

    this.service.updateFinancas(this.idFinanca, receita).subscribe((receita: Financa) => {
      this.receita = receita
      this.location.back()
      alert('Receita atualizada com sucesso :)')
     }), error => {console.log('erro')
        alert('Não foi possível atualizar a receita :(')
      },()=>{}

    }

  voltar(){
    this.location.back()
  }

}
