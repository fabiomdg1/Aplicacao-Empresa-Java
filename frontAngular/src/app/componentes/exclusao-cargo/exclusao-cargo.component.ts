import { CargoService } from './../../servicos/cargo.service';
import { Cargo } from './../../cargoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-cargo',
  templateUrl: './exclusao-cargo.component.html',
  styleUrls: ['./exclusao-cargo.component.css']
})
export class ExclusaoCargoComponent implements OnInit {

  //----------------------- Criando a Instância do Objeto Cargo ----------------//
  //---------------- Será o parâmetro da função mostrarUmCargo -----------------//
  cargo:Cargo = {
    id_cargo: '',
    car_nome:'',
    car_atribuicao:''
  }


  //--------------------------- Injeção de dependências --------------------------//
  //------------No Angular a injeção de dependências é feito no construtor -------//
  //---------- cargoService vai disponibilizar todos seus métodos aqui -----------//
  //------ A classe Active route serve para pegar o Id na url como parâmetro -----//
  //----- A classe Router fornece o método navigate() ----------------------------//
  //----- O método navigate é utilizado para fazer a navegação via código --------//
  constructor(private cargoService:CargoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
    this.mostrarUmCargo()
  }

  //------------------------------- Mostrar um Cargo ------------------------------//
  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado;
    })
  }

  //------------------------------- Excluir um Cargo ------------------------------//
  excluirCargo(){
    this.cargoService.excluirCargo(this.cargo.id_cargo).subscribe({
      complete: ()=> alert("Cargo excluído com sucesso"),
      error: ()=> alert("Este cargo possui funcionários associados, não pode ser excluído")
    })

    //----- O Refresh da página ocorre mais rápido que a exclusão do registro no bd -----//
    //----- O setTimeout faz o refresh aguardar para poder mostrar a exclusão -----------//
    setTimeout(() => {
      this.router.navigate(['/cargo']);
    }, 500)
  }

}
