import { Cargo } from '../../../cargoModel';
import { CargoService } from 'src/app/servicos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edicao-cargo',
  templateUrl: './edicao-cargo.component.html',
  styleUrls: ['./edicao-cargo.component.css']
})
export class EdicaoCargoComponent implements OnInit {

  cargo: Cargo = {
    id_cargo:'',
    car_nome:'',
    car_atribuicao:''
  }

  constructor(private cargoService: CargoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
    this.mostrarUmCargo()
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado
    })
  }

  editarCargo(){
    this.cargoService.editarCargo(this.cargo).subscribe({
      next:() => console.log("Cargo editado com sucesso"),
      complete: () => alert("Cargo editado com sucesso"),
      error: () => alert("Erro: Cargo não pode ser editado")
    })

    //----- O Refresh da página ocorre mais rápido que a exclusão do registro no bd -----//
    //----- O setTimeout faz o refresh aguardar para poder mostrar a exclusão -----------//
    setTimeout(() => {
      this.router.navigate(['/cargo']);
    }, 500)

  }



}
