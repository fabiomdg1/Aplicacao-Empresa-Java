import { PerfilFuncionarioComponent } from './componentes/Funcionario/perfil-funcionario/perfil-funcionario.component';
import { EdicaoFuncionarioComponent } from './componentes/Funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaGeralFuncionarioComponent } from './componentes/Funcionario/lista-geral-funcionario/lista-geral-funcionario.component';
import { CadastroFuncionarioComponent } from './componentes/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ExclusaoFuncionarioComponent } from './componentes/Funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/Funcionario/lista-funcionario/lista-funcionario.component';
import { EdicaoCargoComponent } from './componentes/Cargo/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './componentes/Cargo/exclusao-cargo/exclusao-cargo.component';
import { CadastroCargoComponent } from './componentes/Cargo/cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './componentes/Cargo/lista-cargo/lista-cargo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full' },
  //--------------------------- Home ---------------------------------//
  {path: "home", component:HomeComponent},

  //-------------------------- Cargo ---------------------------------//
  {path: "cargo", component:ListaCargoComponent},
  {path: "cadastroCargo", component:CadastroCargoComponent},
  {path: "edicaoCargo/:id", component: EdicaoCargoComponent},
  {path: "exclusaoCargo/:id", component: ExclusaoCargoComponent},

  //-------------------------- Funcionários --------------------------//
  //Exibir
  {path: "listaGeralFuncionarios", component:ListaGeralFuncionarioComponent},
  {path: "funcionarioCargo/:id_cargo",component: ListaFuncionarioComponent},
  {path: "perfilFuncionario", component:PerfilFuncionarioComponent},
  //Inserir
  {path: "cadastroFuncionario/:id_cargo", component:CadastroFuncionarioComponent},
  //Editar
  {path: "edicaoFuncionario/:id_funcionario", component:EdicaoFuncionarioComponent},
  {path: "edicaoFuncionario", component:EdicaoFuncionarioComponent},
  //Excluir
  //{path: "exclusaoFuncionario/:id_funcionario", component: ExclusaoFuncionarioComponent},
  {path: "exclusaoFuncionario/:id_funcionario", component:ExclusaoFuncionarioComponent},
  {path: "exclusaoFuncionario", component:ExclusaoFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
