import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {

  id_cargo: String=''

  funcionario:Funcionario = {
    id_funcionario:'',
    func_cargo:'',
    id_cargo:'',
    func_cidade:'',
    func_bairro:'',
    func_nome:'',
    func_email:'',
    func_telefone:'',
    func_salario:'',
    func_observacao:''
  }


  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get("id_cargo")!
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get("id_funcionario")
    this.buscarUmFuncionario()
  }

  buscarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe((resultado)=>{
      this.funcionario = resultado
      console.log("Id do cargo: " + this.funcionario)
    })
  }

  deleteFuncionario(){
    this.funcionarioService.excluirFuncionario(this.funcionario.id_funcionario).subscribe({
      next: () => {console.log("Funcionário deletado com sucesso")},

      error: () => {alert("Não foi possível deletar este Funcionário")
                    this.router.navigate(["/cargo"])
      },

      complete: () => {this.router.navigate(["/cargo"])}

      }
    )
  }

}
