import { EdicaoCargoComponent } from './componentes/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './componentes/exclusao-cargo/exclusao-cargo.component';
import { CadastroCargoComponent } from './componentes/cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './componentes/lista-cargo/lista-cargo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full' },
  {path: "home", component:HomeComponent},
  {path: "cargo", component:ListaCargoComponent},
  {path: "cadastroCargo", component:CadastroCargoComponent},
  {path: "exclusaoCargo/:id", component: ExclusaoCargoComponent},
  {path: "edicaoCargo/:id", component: EdicaoCargoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
