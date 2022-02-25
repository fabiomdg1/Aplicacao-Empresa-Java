package soulCode.Empresa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.Empresa.model.Cargo;
import soulCode.Empresa.model.Supervisor;
import soulCode.Empresa.repository.CargoRepository;
import soulCode.Empresa.repository.SupervisorRepository;

@Service
public class SupervisorService {
	@Autowired
	private SupervisorRepository supervisorRepository;
	
	@Autowired
	private CargoService cargoService;
	
	@Autowired
	private CargoRepository cargoRepository;
	
	public List<Supervisor> mostrarTodosSupervisores(){
		return supervisorRepository.findAll();
	}
	
	public Supervisor mostrarUmSupervisor(Integer id_supervisor) {
		Optional<Supervisor> supervisor = supervisorRepository.findById(id_supervisor);
		return supervisor.orElseThrow();		
	}
	
	
	public Supervisor editarSupervisor(Integer id_cargo, Supervisor supervisor) {
		
		if(id_cargo != null) {
			Supervisor dadosSupAntesDaMudanca = mostrarUmSupervisor(supervisor.getId_supervisor());
			Cargo cargoAnterior = dadosSupAntesDaMudanca.getCargo();
			
			if(cargoAnterior != null) {				
				cargoAnterior.setSupervisor(null);
				cargoRepository.save(cargoAnterior);				
			}		
			
			Cargo cargo = cargoService.buscarUmCargo(id_cargo);
			supervisor.setCargo(cargo);
			cargo.setSupervisor(supervisor);			
		}		
		return supervisorRepository.save(supervisor);
	}
	
	public Supervisor InserirProfessor(Integer id_cargo, Supervisor supervisor) {
		supervisor.setId_supervisor(null);
		
		if(id_cargo != null) {
			Cargo cargo = cargoService.buscarUmCargo(id_cargo);
			supervisor.setCargo(cargo);		
			cargo.setSupervisor(supervisor);
		}
		return supervisorRepository.save(supervisor);		
	}
	
	public Supervisor buscarSupervisorDoCargo(Integer id_cargo) {
		Supervisor supervisor = supervisorRepository.buscaSupervisorDoCargo(id_cargo);
		return supervisor;
	}
}




















