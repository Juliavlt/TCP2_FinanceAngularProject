import { Location } from '@angular/common';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private readonly route: Router, private service: UserService,private location:Location ){}

  user?: string;
  pass?: string;
  confirmPass?: string;

  newUser?:User;

  userForm?: FormGroup;

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario(){
    this.userForm = this.formBuilder.group({
      user: [null, Validators.required],
      pass: [null, Validators.required],
      confirmPass: [null, [Validators.required]
    ]
    })
  }

  cadastrar(){
    if(this.validatePassword(this.userForm.get("pass").value, this.userForm.get("confirmPass").value)){
      this.newUser = {
        username: this.userForm.get("user").value,
        password: this.userForm.get("pass").value
      };
      this.service
      .createUser(this.newUser)
      .subscribe( (data) =>{
       console.log(data)
        this.route.navigate(['/login'])});
    }else{
      alert("Dados incorretos!")
      this.location.back();
    }
  }

  validatePassword(pass1:string, pass2:string){
    if(pass1===pass2){
      return true;
    }
    return false;
  }
}
