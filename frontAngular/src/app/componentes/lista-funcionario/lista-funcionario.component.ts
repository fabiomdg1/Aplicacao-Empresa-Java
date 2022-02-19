import { FuncionarioService } from './../../servicos/funcionario.service';
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

  constructor(private funcionarioService: FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.buscarFuncionarioCargo()
  }

  buscarFuncionarioCargo(){
    this.funcionarioService.buscarFuncionarioCargo(this.id_cargo).subscribe((resultado)=>{
      this.funcionarios = resultado
    })
  }

}
