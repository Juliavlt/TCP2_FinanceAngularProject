import { AtualizarReceitaComponent } from './receita/atualizar-receita/atualizar-receita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarDespesaComponent } from './despesa/atualizar-despesa/atualizar-despesa.component';
import { CadastroDespesaComponent } from './despesa/cadastro-despesa/cadastro-despesa.component';
import { DetalheDespesaComponent } from './despesa/detalhe-despesa/detalhe-despesa.component';
import { HomeComponent } from './home/home.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { CadastroReceitaComponent } from './receita/cadastro-receita/cadastro-receita.component';
import { DetalheReceitaComponent } from './receita/detalhe-receita/detalhe-receita.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './usuario/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'detalhe-despesa/:id', component: DetalheDespesaComponent},
  {path: 'cadastro-despesa/:id', component: CadastroDespesaComponent},
  {path: 'atualizar-despesa/:id', component: AtualizarDespesaComponent},


  {path: 'detalhe-receita/:id', component: DetalheReceitaComponent},
  {path:'cadastro-receita/:id', component: CadastroReceitaComponent},
  {path: 'atualizar-receita/:id', component: AtualizarReceitaComponent},


  {path: 'menu-principal/:id', component: MenuPrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
