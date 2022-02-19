import { CargoService } from './../../servicos/cargo.service';
import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  //----- Criando objeto turma para servir de parâmetro na função cadastrarCargo -----//
  cargo:Cargo = {
    car_nome: '',
    car_atribuicao: ''
  }

  //--------------------------- Injeção de dependências --------------------------//
  //------------No Angular a injeção de dependências é feito no construtor -------//
  //---------- cargoService vai disponibilizar seus métodos ----------------------//
  //---------- router vai disponibilizar seus métodos ----------------------------//
  constructor(private cargoService: CargoService, private router: Router) { }

  ngOnInit(): void {
  }

  //------------------------------ Cadastrar Cargo -------------------------------//
  cadastrarCargo(){
    // this.cargoService.cadastrarCargo(this.cargo).subscribe((resultado)=>{
    //   alert("Cargo cadastrada com sucesso")
    //   this.router.navigate(['/turma'])
    // })

    this.cargoService.cadastrarCargo(this.cargo).subscribe({
      //next:()=>{alert("Cargo Cadastrado")},

      error:()=>{alert("Erro ao cadastrar cargo")
                  this.router.navigate(["/cargo"])},

      complete:()=>{alert("Cadastro do cargo efetuado com sucesso")
                  this.router.navigate(['/cargo'])}
    })


    //----- O Refresh da página ocorre mais rápido que o cadastro do registro no bd -----//
    //----- O setTimeout faz o refresh aguardar para poder mostrar o novo registro ------//
    //setTimeout(() => {
    //  this.router.navigate(['/cargo']);
    //}, 500)
  }
}
