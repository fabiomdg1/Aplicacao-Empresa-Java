import { Cargo } from 'src/app/cargoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/funcionarioModel';
import { CargoService } from 'src/app/servicos/cargo.service';
import { FuncionarioService } from 'src/app/servicos/funcionario.service';


@Component({
  selector: 'app-cadastro-funcionario-sem-cargo',
  templateUrl: './cadastro-funcionario-sem-cargo.component.html',
  styleUrls: ['./cadastro-funcionario-sem-cargo.component.css']
})
export class CadastroFuncionarioSemCargoComponent implements OnInit {

  id_cargo:string=''
  func_cargo:String | undefined

  cargosCadastrados:any=[]

  //Traz uma lista de cargos
  cargos:Cargo[] = []


  //No caso abaixo irá trazer apenas um cargo.. erro
  // cargos:Cargo = {
  //   id_cargo: '',
  //   car_atribuicao: '',
  //   car_nome: ''
  // }


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
    //this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!

    this.buscarCargo()
  }

  cadastrarFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario,this.funcionario.func_cargo).subscribe({

      next:() => {console.log("Funcionário cadastrado")},

      error: () => {alert("Erro no cadastro do funcionário")
                    this.router.navigate([`/funcionarioCargo/${this.funcionario.func_cargo}`])},

      complete: () => {alert("Funcionário cadastrado no cargo")
                      this.router.navigate([`/funcionarioCargo/${this.funcionario.func_cargo}`])},
    })
  }


  // cadastrarFuncionarioSemCargo(){
  //   this.funcionarioService.cadastrarFuncionarioSemCargo(this.funcionario,this.funcionario.func_cargo).subscribe({

  //     next:() => {console.log("Funcionário cadastrado")
  //                 console.log("Resultado next" + this.funcionario.func_bairro)},

  //     error: () => {alert("Erro no cadastro do funcionário")},

  //     complete: () => {alert("Funcionário cadastrado no cargo")
  //                      console.log("Resultado complete" + this.funcionario.func_cargo)},
  //   })
  // }





  buscarCargo(){
    //this.cargoService.mostrarUmCargo(this.id_cargo).subscribe((resultado)=>{
      this.cargoService.mostrarTodosCargos().subscribe((resultado)=>{

      this.cargos = resultado
      console.log("Resultado",this.cargos)
    })

  }


}
