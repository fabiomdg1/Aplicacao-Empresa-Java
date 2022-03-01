import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';
import { Funcionario } from 'src/app/funcionarioModel';


@Component({
  selector: 'app-perfil-funcionario',
  templateUrl: './perfil-funcionario.component.html',
  styleUrls: ['./perfil-funcionario.component.css']
})
export class PerfilFuncionarioComponent implements OnInit {

  id_funcionario:string=''
  //funcionarios:Funcionario[] = []
  funcionarios:Funcionario = {
    func_bairro:'',
    func_cidade:'',
    func_email:'',
    func_cargo:'',
    func_nome:'',
    func_observacao:'',
    func_salario:'',
    func_telefone:'',
    id_funcionario:''
  }


  constructor(private route:ActivatedRoute, private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    //this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario)')!
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')!
    this.buscarFuncionarioPerfil()
    console.log("Id do funcionário: " + this.id_funcionario)
  }

   buscarFuncionarioPerfil(){
    this.funcionarioService.buscarUmFuncionario(this.id_funcionario).subscribe((resultado)=>{
      this.funcionarios = resultado
      console.log(this.funcionarios)
    })
  }
}
