import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../../funcionarioModel';
import { CargoService } from 'src/app/servicos/cargo.service';



@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_cargo:string=''
  nome_cargo:any

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
              private cargoService:CargoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    // id_turma precisa estar com o mesmo nome colocado na rota
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
    this.buscarCargo()
  }

  cadastrarFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario,this.id_cargo).subscribe({

      next:() => {console.log("Funcionário cadastrado no cargo" + this.id_cargo)},

      error: () => {alert("Erro no cadastro do funcionário")
                    this.router.navigate([`/cadastroFuncionario/${this.id_cargo}`])},

      complete: () => {alert("Funcionário cadastrado no cargo")
                      this.router.navigate([`/funcionarioCargo/${this.id_cargo}`])},
    })
  }

  buscarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado)=>{
      this.nome_cargo = resultado.car_nome
    })

  }


}
