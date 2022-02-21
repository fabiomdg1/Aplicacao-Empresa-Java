package soulCode.Empresa.controller;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import soulCode.Empresa.model.Cargo;
import soulCode.Empresa.service.CargoService;



//-------------------------------------A notação CrossOrigin evita o problema de Cors--------------------------//
@CrossOrigin


//------------------- A notação @RestController simplesmente retorna o objeto como JSON ou XML ----------------//
//------------------- E os dados do objeto são gravados diretamente na resposta HTTP --------------------------//
@RestController


//--------- A notação @RequestMapping Serve para disponibilizar os endereços da sua aplicação ao usuário final ------------//
//-------- Quando esses endereços forem acessados por algum cliente, ele terá acesso aos métodos desta classe. ------------//
//----- Neste caso, quando acessado irá disponibilizar os métodos Mostrar, Inserir, Deletar e Atualizar Cargos ------------//
@RequestMapping("empresa")
public class CargoController {


	//----- Utilizando a injeção de dependência da classe CargoService -----//
	@Autowired
	private CargoService cargoService;
	
	
	//--------------------------------------------------- GET --------------------------------------------------------------------//
	//----- Disponibilizando o método mostrarTodosCargos através do endereço empresa/cargo por meio da notação @GetMapping -----//
	//----- A diferença para o RequestMapping é que o @GetMapping especifica os tipos de solicitações HTTP. Neste caso o GET -----//
	@GetMapping("/cargo")
	public List<Cargo> mostrarTodosCargos(){
		List<Cargo> cargo = cargoService.mostrarTodosCargos();
		return cargo;
	}
	
	
	//--------------------------------------------------- GET -----------------------------------------------------------------------------//
	//----- Disponibilizando o método mostrarTodosAlunos através do endereço empresa/cargo/id_empresa por meio da notação @GetMapping -----//
	//----- A diferença para o RequestMapping é que o @GetMapping especifica os tipos de solicitações HTTP. Neste caso o GET --------------//
	//----- A notação @PathVariable é utilizado quando o valor da variável é passada diretamente na URL -----------------------------------//	
	@GetMapping("/cargo/{id_cargo}")
	public ResponseEntity<Cargo> buscarUmCargo(@PathVariable Integer id_cargo){
		Cargo cargo = cargoService.buscarUmCargo(id_cargo);
		return ResponseEntity.ok().body(cargo);
	}
	
	
	//--------------------------------------------------- POST ---------------------------------------------------------------------------//
	//----- Disponibilizando o método create através do endereço empresa/cargo/ por meio da notação @GetMapping --------------------------//
	//----- A diferença para o RequestMapping é que o @GetMapping especifica os tipos de solicitações HTTP. Neste caso o POST ------------//
	//----- A notação @RequestBody é utilizado quando o valor da variável é passada diretamente na URL -----------------------------------//
	@PostMapping("/cargo")
	public ResponseEntity<Cargo> create(@RequestBody Cargo cargo){
		cargo = cargoService.create(cargo);
		
		//--------------------------------------------------- URI --------------------------------------------------------------------//
		//-------------------- Basicamente o URI é composto pelo complemento da URL padrão do site -----------------------------------//
		//------------------------------ Passando parâmetros específicos para a aplicação --------------------------------------------//
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(cargo.getId_cargo()).toUri();
		return ResponseEntity.created(uri).build();				
	}
	
	//--------------------------------------------------- PUT ----------------------------------------------------------------------------//
	//----- Disponibilizando o método editar através do endereço empresa/cargo/id_cargo por meio da notação @GetMapping ------------------//
	//----- A diferença para o RequestMapping é que o @GetMapping especifica os tipos de solicitações HTTP. Neste caso o PUT -------------//
	//----- A notação @RequestBody é utilizado quando o valor da variável é passada diretamente na URL -----------------------------------//
	@PutMapping("/cargo/{id_cargo}")
	public ResponseEntity<Void> editarCargo(@PathVariable Integer id_cargo, @RequestBody Cargo cargo){
		cargo.setId_cargo(id_cargo);
		cargo = cargoService.editarCargo(cargo);
		return ResponseEntity.noContent().build();
	}
	
	//--------------------------------------------------- DELETE -------------------------------------------------------------------------//
	//----- Disponibilizando o método editar através do endereço empresa/cargo/id_cargo por meio da notação @GetMapping ------------------//
	//----- A diferença para o RequestMapping é que o @GetMapping especifica os tipos de solicitações HTTP. Neste caso o PUT -------------//

	@DeleteMapping("/cargo/{id_cargo}")
	public ResponseEntity<Void> deletarUmCargo(@PathVariable Integer id_cargo){
		cargoService.deletarUmCargo(id_cargo);
		return ResponseEntity.noContent().build();
	}
	
	}