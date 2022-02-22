import { FuncionarioService } from './../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-geral-funcionario',
  templateUrl: './lista-geral-funcionario.component.html',
  styleUrls: ['./lista-geral-funcionario.component.css']
})
export class ListaGeralFuncionarioComponent implements OnInit {

  funcionarios:Funcionario[]=[]

  constructor(private funcionarioService: FuncionarioService, private router:Router) { }

  ngOnInit(): void {
    this.mostrarTodosFuncionarios()
  }

  mostrarTodosFuncionarios(){
    this.funcionarioService.buscarTodosFuncionarios().subscribe(resultado=>{
      this.funcionarios = resultado
    })

  }

}
