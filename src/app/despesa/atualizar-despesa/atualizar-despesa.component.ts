import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Financa } from 'src/model/financa.model';
import { FinancaService } from 'src/service/financa.service';
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizar-despesa',
  templateUrl: './atualizar-despesa.component.html',
  styleUrls: ['./atualizar-despesa.component.scss']
})
export class AtualizarDespesaComponent implements OnInit {

  despesa?: Financa = {id:0, idUser: 0, tipo:1, categoria:"", dataMovimentacao: "", valor:1};
  idFinanca?: number;
  despesaForm?: FormGroup;
  exists:boolean = false;

  constructor(
    private readonly rota: ActivatedRoute,
    private location:Location,
    private formBuilder: FormBuilder,
    private service:FinancaService)
    {}

  idDespesaToUpdate:number;

  ngOnInit(): void {
    this.idFinanca = Number(this.rota.snapshot.paramMap.get("id"));
    this.getDespesa(this.idFinanca);
  }

  getDespesa(id:number){
    this.service.getFinanca(id).subscribe((despesa: Financa) => {
      this.despesa = despesa;
      this.configurarFormulario();
      this.exists = true;
    });
  }

  configurarFormulario(){
    this.despesaForm = this.formBuilder.group({
      categoria: [this.despesa.categoria, Validators.required],
      valor: [this.despesa.valor, Validators.required],
      data: [this.despesa.dataMovimentacao, [Validators.required]
    ]
    })
  }
  atualizar(){
    const despesa = {
      idUser: 1,
      tipo:  1,
      valor: this.despesaForm.get("valor").value,
      categoria: this.despesaForm.get("categoria").value,
      dataMovimentacao: this.despesaForm.get("data").value,
    };

    this.service.updateFinancas(this.idFinanca, despesa).subscribe((despesa: Financa) => {
      this.despesa = despesa
      this.location.back()
      alert('Despesa atualizada com sucesso :)')
     }), (erro)=>{
        alert('Não foi possível atualizar a despesa :(')
      },()=>{}

    }

  voltar(){
    this.location.back()
  }
}
