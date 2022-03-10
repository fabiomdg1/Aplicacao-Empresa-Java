import { FuncionarioService } from 'src/app/servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/funcionarioModel';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edicao-funcionario',
  templateUrl: './edicao-funcionario.component.html',
  styleUrls: ['./edicao-funcionario.component.css']
})
export class EdicaoFuncionarioComponent implements OnInit {

  id_cargo:String=''

  funcionario:Funcionario = {
    id_funcionario:'',
    func_cargo:'',
    id_cargo:'',
    func_cidade:'',
    func_bairro:'',
    func_nome:'',
    func_telefone:'',
    func_email:'',
    func_salario:'',
    func_observacao:''
  }

  constructor(private funcionarioService:FuncionarioService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get("id_cargo")!
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.mostrarUmFuncionario()
  }

  mostrarUmFuncionario(){
    this.funcionarioService.buscarUmFuncionario(this.funcionario.id_funcionario).subscribe(resultado=>{
      this.funcionario = resultado
    })
  }

  editarFuncionario(){
    this.funcionarioService.editarFuncionario(this.funcionario).subscribe({
        next:() => console.log("Funcionário editado com sucesso"),
        complete: () => alert("Funcionário editado com sucesso"),
        error: () => alert("Erro: Funcionário não pode ser editado")
      })
  }

}
