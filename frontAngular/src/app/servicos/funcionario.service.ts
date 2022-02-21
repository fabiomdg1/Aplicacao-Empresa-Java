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
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }

  buscarUmFuncionario(id_funcionario:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }


  //-------------------------------------------- POST --------------------------------------------//
  cadastrarFuncionario(funcionario:Funcionario, id_cargo:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url,funcionario)
  }


  //-------------------------------------------- PUT ---------------------------------------------//
  editarFuncionario(){

  }


  //------------------------------------------- DELETE --------------------------------------------//
  excluirFuncionario(id_funcionario:string):Observable<Funcionario>{
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<Funcionario>(url)
  }



}
