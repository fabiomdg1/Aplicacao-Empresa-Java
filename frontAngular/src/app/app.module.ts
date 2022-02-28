//------------ Reponsável por permitir o uso do ngModel -------//
import { FormsModule } from '@angular/forms';

//-------------------------------------------------------------//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

//-------------------- Páginas da aplicação --------------------//
import { AppComponent } from './app.component';
import { ListaCargoComponent } from './componentes/lista-cargo/lista-cargo.component';
import { EdicaoCargoComponent } from './componentes/edicao-cargo/edicao-cargo.component';
import { ExclusaoCargoComponent } from './componentes/exclusao-cargo/exclusao-cargo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CadastroCargoComponent } from './componentes/cadastro-cargo/cadastro-cargo.component';
import { CadastroFuncionarioComponent } from './componentes/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/lista-funcionario/lista-funcionario.component';
import { ExclusaoFuncionarioComponent } from './componentes/exclusao-funcionario/exclusao-funcionario.component';
import { EdicaoFuncionarioComponent } from './componentes/edicao-funcionario/edicao-funcionario.component';
import { ListaGeralFuncionarioComponent } from './componentes/lista-geral-funcionario/lista-geral-funcionario.component';
import { PerfilFuncionarioComponent } from './componentes/perfil-funcionario/perfil-funcionario.component';


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
