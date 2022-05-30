import { AtualizarReceitaComponent } from './receita/atualizar-receita/atualizar-receita.component';
import { AtualizarDespesaComponent } from './despesa/atualizar-despesa/atualizar-despesa.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDespesaComponent } from './despesa/cadastro-despesa/cadastro-despesa.component';
import { DetalheDespesaComponent } from './despesa/detalhe-despesa/detalhe-despesa.component';
import { HomeComponent } from './home/home.component';
import { MenuPrincipalComponent } from './usuario/menu-principal/menu-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroReceitaComponent } from './receita/cadastro-receita/cadastro-receita.component';
import { DetalheReceitaComponent } from './receita/detalhe-receita/detalhe-receita.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './usuario/login/login.component';
import { CategoryService } from 'src/service/categoryService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroDespesaComponent,
    CadastroDespesaComponent,
    DetalheDespesaComponent,
    DetalheReceitaComponent,
    MenuPrincipalComponent,
    LoginComponent,
    NavbarComponent,
    CadastroReceitaComponent,
    CadastroDespesaComponent,
    CadastroUsuarioComponent,
    AtualizarDespesaComponent,
    AtualizarReceitaComponent,
      ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
