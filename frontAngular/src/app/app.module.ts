import { CadastroFuncionarioSemCargoComponent } from './componentes/Funcionario/cadastro-funcionario-sem-cargo/cadastro-funcionario-sem-cargo.component';
//------------ Reponsável por permitir o uso do ngModel -------//
import { FormsModule } from '@angular/forms';

//-------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

//-------------------- Páginas da aplicação --------------------//
import { AppComponent } from './app.component';
import { ListaCargoComponent } from './componentes/Cargo/lista-cargo/lista-cargo.component';
import { EdicaoCargoComponent } from './componentes/Cargo/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './componentes/Cargo/exclusao-cargo/exclusao-cargo.component';
import { FooterComponent } from './componentes/Templates/footer/footer.component';
import { HomeComponent } from './componentes/Templates/home/home.component';
import { HeaderComponent } from './componentes/Templates/header/header.component';
import { CadastroCargoComponent } from './componentes/Cargo/cadastro-cargo/cadastro-cargo.component';
import { CadastroFuncionarioComponent } from './componentes/Funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/Funcionario/lista-funcionario/lista-funcionario.component';
import { ExclusaoFuncionarioComponent } from './componentes/Funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { EdicaoFuncionarioComponent } from './componentes/Funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaGeralFuncionarioComponent } from './componentes/Funcionario/lista-geral-funcionario/lista-geral-funcionario.component';
import { PerfilFuncionarioComponent } from './componentes/Funcionario/perfil-funcionario/perfil-funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaCargoComponent,
    EdicaoCargoComponent,
    ExclusaoCargoComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    CadastroCargoComponent,
    CadastroFuncionarioComponent,
    CadastroFuncionarioSemCargoComponent,
    ListaFuncionarioComponent,
    ExclusaoFuncionarioComponent,
    EdicaoFuncionarioComponent,
    ListaGeralFuncionarioComponent,
    PerfilFuncionarioComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
