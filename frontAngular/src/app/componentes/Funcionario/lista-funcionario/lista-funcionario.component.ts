import { CargoService } from 'src/app/servicos/cargo.service';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Funcionario } from 'src/app/funcionarioModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  id_cargo:string=''
  funcionarios:Funcionario[] = []
  nome_cargo:any
  func:any
  fc: any[] = new Array

  constructor(private funcionarioService: FuncionarioService,
              private cargoService: CargoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.buscarFuncionarioCargo()
    this.buscarCargo()
    this.mostrarFuncCargos()
  }

  mostrarFuncCargos(){
    this.funcionarioService.buscarFuncCargo(this.id_cargo).subscribe(resultado=>{
      this.funcionarios = resultado
      //console.log("Teste funcionarios: " + this.funcionarios)

        // for(this.func of this.funcionarios){
        //   this.fc.push(this.func)
        //   console.log(this.fc)
        // }
    })
  }

  buscarFuncionarioCargo(){
    this.funcionarioService.buscarFuncionarioCargo(this.id_cargo).subscribe((resultado)=>{
      setTimeout(() => {
        this.funcionarios = resultado
      }, 500)
    })
  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado)=>{

      //----- O Refresh da página ocorre mais rápido que o cadastro do registro no bd -----//
      //----- O setTimeout faz o refresh aguardar para poder mostrar o novo registro ------//
      setTimeout(() => {
        this.nome_cargo = resultado.car_nome;
      }, 500)


    })
  }

}
