package soulCode.Empresa.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import soulCode.Empresa.model.Supervisor;
import soulCode.Empresa.service.CargoService;
import soulCode.Empresa.service.SupervisorService;


@CrossOrigin
@RestController
@RequestMapping("empresa")
public class SupervisorController {
	@Autowired
	private SupervisorService supervisorService;
	
	@Autowired
	private CargoService cargoService;

	
	@GetMapping("/supervisor")
	public List<Supervisor> mostrarTodosSupervisores(){		
		return supervisorService.mostrarTodosSupervisores();
	}
	
	@GetMapping("/supervisor/{id_supervisor}")
	public ResponseEntity<Supervisor> mostrarUmSupervisor(@PathVariable Integer id_supervisor) {
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
		return ResponseEntity.ok().body(supervisor);
	}
	
	@GetMapping("/supervisor-cargo/{id_cargo}")
	public ResponseEntity<Supervisor>buscarsSpervisorDoCargo(@PathVariable Integer id_cargo){
		Supervisor supervisor = supervisorService.buscarSupervisorDoCargo(id_cargo);
		return ResponseEntity.ok().body(supervisor);
	}
	
		
	@PostMapping("/supervisor")
	public ResponseEntity<Supervisor> inserirSupervisor(@RequestParam(value="cargo", required=false)
	Integer id_cargo, @RequestBody Supervisor supervisor){		
		supervisor = supervisorService.InserirProfessor(id_cargo, supervisor);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(supervisor.getId_supervisor()).toUri();
		return ResponseEntity.created(uri).build();
	}	
	
	
	
	@PutMapping("/supervisor/{id_professor}")
	public ResponseEntity<Supervisor> editarSupervisor(@RequestParam(value="cargo", required=false)Integer id_cargo, @PathVariable Integer id_supervisor, @RequestBody Supervisor supervisor){
		supervisor.setId_supervisor(id_supervisor);
		
		
		supervisor = supervisorService.editarSupervisor(id_cargo, supervisor);
		return ResponseEntity.noContent().build();		
	}
}
