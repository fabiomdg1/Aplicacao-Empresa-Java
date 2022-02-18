import { Cargo } from '../cargoModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

   //----- GET e POST serão solicitados e enviados a partir da urlBase -----//
   baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http:HttpClient) { }


  //------------------------- Observable ------------------------------//
  //--------- É uma funcionalidade da biblioteca rxjs -----------------//
  //----- Possibilita lidar com transferência de dados assíncrona -----//

  //------------------------------GET---------------------------------//
  //-----------------------mostrarTodosCargos-------------------------//
  mostrarTodosCargos():Observable<Cargo[]>{
    const url = `${this.baseUrl}/cargo`
    return this.http.get<Cargo[]>(url)
  }

  //------------------------------GET---------------------------------//
  //------------------------mostrarUmCargo---------------------------//
  //-------------Este método é usado para excluir cargo---------------//
  mostrarUmCargo(id:string):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)
  }

  //-----------------------------POST-------------------------------//
  //-------------------------cadastrarCargo-------------------------//
  cadastrarCargo(cargo:Cargo):Observable<Cargo>{
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url,cargo)
  }

  //----------------------------DELETE------------------------------//
  //-------------------------cadastrarCargo-------------------------//
  excluirCargo(id:String):Observable<void>{
    console.log("Excluindo " + id)
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.delete<void>(url)
  }

  //------------------------------PUT-------------------------------//
  //--------------------------editarCargo---------------------------//
  editarCargo(cargo:Cargo):Observable<void>{
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<void>(url,cargo)
  }
}
