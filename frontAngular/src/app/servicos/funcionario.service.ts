import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Funcionario } from '../funcionarioModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  //--------------------- Definindo a url para comunicação com o backend -------------------------//
  baseUrl:string = "http://localhost:8080/empresa"


  //--------------------- Injeção de dependência da classe HttpClient ----------------------------//
  constructor(private http:HttpClient) { }


  //----------------------------------- Declaração de Métodos ------------------------------------//

  //-------------------------------------------- GET ---------------------------------------------//
  buscarFuncionarioCargo(id_cargo:string):Observable<Funcionario[]>{
    //----- A url vai complementar seu endereço com o endereço existente no backend --------------//
    //----- Este endereço está definido na notação @GetMapping na pasta controller ---------------//
    const url = `${this.baseUrl}/funcionario/buscarFuncionarioCargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }

  buscarUmFuncionario(){

  }


  //-------------------------------------------- POST --------------------------------------------//
  cadastrarFuncionario(){

  }


  //-------------------------------------------- PUT ---------------------------------------------//
  editarFuncionario(){

  }


  //------------------------------------------- DELETE --------------------------------------------//
  excluirFuncionario(){

  }



}
