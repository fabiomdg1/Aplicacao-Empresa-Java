import { FuncionarioService } from './../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {

  funcionario:Funcionario = {
    id_funcionario:'',
    func_cargo:'',
    func_cidade:'',
    func_nome:'',
  }


  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get("id_funcionario")
    this.buscarUmFuncionario()
  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado)=>{
      this.funcionario = resultado
    })
  }

  deleteAluno(){
    this.funcionarioService.excluirFuncionario(this.funcionario.id_funcionario).subscribe({
      next: () => {alert("Funcionário deletado com sucesso")},
      error: () => {alert("Não foi possível deletar este Funcionário")},
      complete: () => {this.router.navigate(["/cargo"])}

      }
    )
  }

}
