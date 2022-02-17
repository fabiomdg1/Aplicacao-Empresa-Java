import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/servicos/cargo.service';

@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {

  //----- Declaração de Variáveis -----//
  cargos:Cargo[] = []

  //--------------------------- Injeção de dependências ----------------------------//
  //------------No Angular a injeção de dependências é feito no construtor ---------//
  //---------- turmaService vai disponibilizar todos seus métodos aqui -------------//
  //---------- O Active route serve para pegar o Id na url como parâmetro ----------//
  constructor(private cargoService:CargoService) { }

  //----- ngOnInit inicializa automaticamente no carregamento de um componente -----//
  ngOnInit(): void {
    this.mostrarTodosCargos()
  }


  //----------------------------- mostrarTodosCargos ----------------------------//
  mostrarTodosCargos(){
    this.cargoService.mostrarTodosCargos().subscribe(resposta =>{
      this.cargos = resposta
      console.log(this.cargos)
    })
  }

}
