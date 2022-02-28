import { CargoService } from 'src/app/servicos/cargo.service';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Funcionario } from 'src/app/funcionarioModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/cargoModel';

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
    this.funcionarioService.buscarFuncCargo().subscribe(resultado=>{
      this.funcionarios = resultado
      console.log("Teste: " + this.funcionarios)

        for(this.func of this.funcionarios){
          this.fc.push(this.func)
          console.log(this.fc)
        }
    })
  }

  buscarFuncionarioCargo(){
    this.funcionarioService.buscarFuncionarioCargo(this.id_cargo).subscribe((resultado)=>{
      this.funcionarios = resultado
    })
  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado)=>{
      this.nome_cargo = resultado.car_nome;
    })
  }

}
