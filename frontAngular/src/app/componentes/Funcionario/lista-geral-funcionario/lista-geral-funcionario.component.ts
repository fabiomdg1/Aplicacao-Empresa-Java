import { CargoService } from 'src/app/servicos/cargo.service';
import { Cargo } from '../../../cargoModel';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-geral-funcionario',
  templateUrl: './lista-geral-funcionario.component.html',
  styleUrls: ['./lista-geral-funcionario.component.css']
})
export class ListaGeralFuncionarioComponent implements OnInit {

  id_funcionario:string=''
  funcionarios:Funcionario[]=[]
  func:any
  fc: any[] = new Array
  todosFunc:any

  constructor(private funcionarioService: FuncionarioService,
              private router:Router) { }

  ngOnInit(): void {
    this.mostrarFuncCargos()
  }

  mostrarFuncCargos(){
    this.funcionarioService.buscarFuncCargo().subscribe(resultado=>{
      this.funcionarios = resultado

        for(this.func of this.funcionarios){
          this.fc.push(this.func)
        }

        console.log("Teste: " + this.fc)

    })
  }
}
