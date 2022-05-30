import { UserInfo } from './../../../model/userInfo';
import { UserService } from 'src/service/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,public rotas: Router, private service: UserService) { }


  user?:UserInfo;
  username?: string;
  password?: string;
  rota?: string;
  loginForm?: FormGroup;


  ngOnInit(): void {
    this.configurarFormulario();

  }

  configurarFormulario(){
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  autenticar() {
    this.service.getUser(this.loginForm.get("username").value, this.loginForm.get("password").value).subscribe((user: UserInfo)=> {
      this.user = user
      localStorage.setItem("id", JSON.stringify(this.user.id))
      alert('Usuario logado com sucesso.')
      this.rota = '/menu-principal/'+user.id.toString();
      this.rotas.navigateByUrl(this.rota);
  })}
}
