package soulCode.Empresa.controller;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.Empresa.model.Cargo;
import soulCode.Empresa.model.Funcionario;
import soulCode.Empresa.repository.FuncionarioRepository;
import soulCode.Empresa.service.FuncionarioService;



//----------------------------------------------Problema de Cors-----------------------------------------------------------//
//----- Para evitar o problema de CORS no Java, usamos o CrossOrigin -----//
@CrossOrigin

//----- Perguntar novamente este conceito -----//
@RestController


//-------------------------------------------------EndPoint----------------------------------------------------------------//
//----- O RequestMapping no Java é o endPoint, funciona como as rotas -----//
@RequestMapping("empresa")
public class FuncionarioController {

	
	//----------------------------------------Injeção de Dependências------------------------------------------------------//
	//----- O Autowired permite que seja feito uma injeção de dependência -----//
	//----- Neste caso é injetado as dependências da Interface JpaRepository, ou seja, disponibiliza os recurso desta Interface -----//
	//----- A Interface JpaRepository disponibiliza 11 métodos para tratar o CRUD -----//
	//@Autowired
	//private FuncionarioRepository funcionarioRepository;
		

	//----- Neste caso, é injetado os métodos da classe FuncionarioService, o CRUD de Funcionários -----//
	//----- Através o objeto funcionarioService, podemos acessar o banco de dados -----//
	@Autowired
	//private FuncionarioService funcionarioService;
	private FuncionarioService funcionarioService;
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- GET - Todos os Funcionários------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	//----- Perguntar novamente este conceito -----//
	@GetMapping("/funcionario")
	private List <Funcionario> mostrarTodosFuncionarios(){
		List <Funcionario> funcionario = funcionarioService.mostrarTodosFuncionarios();
		return funcionario;
	}
	
	//--------------------------------------------------- GET - Todos os Funcionários com Cargo ---------------------//
	@GetMapping("/funcionario-cargo")
	public List<List>funcionariosComCargo(){
		List<List> funcionariosCargo = funcionarioService.funcionariosComCargo();
		return funcionariosCargo;
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- GET - Apenas um Funcionário------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	//----- Trazendo dados Json do funcionário -----//
	//----- Traz do banco de dados e exibe na tela -----//
	@GetMapping("/funcionario/{Id_funcionario}")
	public ResponseEntity<?> buscarUmFuncionario(@PathVariable Integer Id_funcionario){
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(Id_funcionario);
		return ResponseEntity.ok().body(funcionario);
	}
	
	//----------------------------------------------------- GET --------------------------------------------------------------------------------//
	//----- Disponibilizando o método buscarAlunoTurma através do endereço faculdade/aluno/busca-turma, aluno por meio da notação @GetMapping -----//
	//----- A diferença para o RequestMapping é que o @GetMapping especifica os tipos de solicitações HTTP. Neste caso o GET -------------------//
	@GetMapping("/funcionario/busca-cargo/{id_cargo}")
	public List<Funcionario> buscarFuncionarioCargo(@PathVariable Integer id_cargo){
		List<Funcionario> funcionario = funcionarioService.buscarFuncionarioCargo(id_cargo);
		return funcionario;
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- POST - Funcionário---------------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	@PostMapping("/funcionario") 
	public ResponseEntity<Funcionario> InserirFuncionario(@RequestParam(value="cargo") Integer id_cargo, @RequestBody Funcionario funcionario){
		
		funcionario = funcionarioService.inserirFuncionario(id_cargo, funcionario);
		
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/cargo/{id}")
				.buildAndExpand(funcionario.getId_funcionario()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- DELETE - Funcionário---------------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	@DeleteMapping("/funcionario/{Id_funcionario}")
	public ResponseEntity<Void> deletarUmFuncionario(@PathVariable Integer Id_funcionario){
		funcionarioService.deletarFuncionario(Id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- UPDATE - Funcionário---------------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	@PutMapping("funcionario/{id_funcionario}")
	public ResponseEntity<Void> editarFuncionario(@RequestParam(value="cargo") Cargo cargo, @PathVariable Integer Id_funcionario, @RequestBody Funcionario funcionario){
		funcionario.setId_funcionario(Id_funcionario);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();
	}
}