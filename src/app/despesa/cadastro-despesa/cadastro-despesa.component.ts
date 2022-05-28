import { Component, OnInit } from '@angular/core';
import { FinancaService } from 'src/service/financa.service';
import { Financa } from 'src/model/financa.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { UserInfo } from 'src/model/userInfo';


@Component({
  selector: 'app-cadastro-despesa',
  templateUrl: './cadastro-despesa.component.html',
  styleUrls: ['./cadastro-despesa.component.scss']
})
export class CadastroDespesaComponent implements OnInit{

constructor(private formBuilder: FormBuilder,
  private readonly route: Router,
  private service:FinancaService,
  private readonly rota: ActivatedRoute,
   private location:Location
  ){}

idUser?: number;
despesaForm?: FormGroup;
despesa?: Financa;
user: UserInfo;


ngOnInit(): void {
  this.idUser = Number(this.rota.snapshot.paramMap.get("id"));
  this.configurarFormulario();
}

configurarFormulario(){
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

    console.log(this.despesa)

    this.service
    .postFinancas(this.despesa)
    .subscribe( () => this.route.navigate(['/detalhe-despesa/'+this.idUser]));
  }

  voltar(){
    this.location.back()
  }
}


