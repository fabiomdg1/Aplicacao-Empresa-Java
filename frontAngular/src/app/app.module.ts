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
    CadastroFuncionarioComponent
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
