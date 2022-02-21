import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from './../../funcionarioModel';



@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_cargo:string=''

  funcionario: Funcionario = {
    id_funcionario:'',
    func_cargo:'',
    func_cidade:'',
    func_nome:''
  }

  constructor(private funcionarioService:FuncionarioService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    // id_turma precisa estar com o mesmo nome colocado na rota
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
  }

  cadastrarFuncionario(){
    this.funcionarioService.cadastrarFuncionario(this.funcionario,this.id_cargo).subscribe({

      next:() => {console.log("Funcionário cadastrado")},

      error: () => {alert("Erro no cadastro do funcionário")
                    this.router.navigate([`/funcionarioCargo/${this.id_cargo}`])},

      complete: () => {alert("Funcionário cadastrado no cargo")
                      this.router.navigate([`/funcionarioCargo/${this.id_cargo}`])},
    })
  }

}
