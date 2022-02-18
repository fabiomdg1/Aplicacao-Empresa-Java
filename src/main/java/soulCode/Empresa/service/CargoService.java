package soulCode.Empresa.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soulCode.Empresa.model.Cargo;
import soulCode.Empresa.repository.CargoRepository;

//----------------------------------------------- Service -------------------------------------------------------//
//---------- A notação @Service define uma classe como pertencente à camada de Serviço da aplicação. ------------//
@Service
public class CargoService {

	//------- Utilizando a injeção de dependência de JpaRepository por meio da Interface CargoRepository -------//
	@Autowired
	private CargoRepository cargoRepository;
	
	//-------------------------------------- Mostrar todas os Cargos -------------------------------------------//
	public List<Cargo> mostrarTodosCargos(){
		return cargoRepository.findAll();
	}
	
	//-------------------------------------- Mostrar um Cargo Específico ---------------------------------------//
	// Optional - economiza código, implementa uma verificação se existe ou não o aluno no banco de dados ------//
	// Optional - se não encontrar o aluno não vai parar a aplicação -------------------------------------------//
	public Cargo buscarUmCargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);			
		return cargo.orElseThrow();
	}
	
	//-------------------------------------------- Criar um Cargo -----------------------------------------------//
	public Cargo create(Cargo cargo) {
		cargo.setId_cargo(null);
		return cargoRepository.save(cargo);
	}
	
	//-------------------------------------------- Editar um Cargo -----------------------------------------------//
	public Cargo editarCargo(Cargo cargo) {
		buscarUmCargo(cargo.getId_cargo());
		return cargoRepository.save(cargo);
	}
	
	//-------------------------------------------- Deletar um Cargo ----------------------------------------------//
	public void deletarUmCargo(Integer id_cargo) {		
		buscarUmCargo(id_cargo);
		
		try {
			cargoRepository.deleteById(id_cargo);
			
		//----- Pega o tipo de erro DataIntegrityViolationException e instanciamos no e -----//
		}catch(org.springframework.dao.DataIntegrityViolationException e) {

			//----- No lançamento da exceção,usamos a que criamos -----//
			
			//throw new soulCode.faculdade.services.exceptions
			//.DataIntegrityViolationException("A turma não pode ser deletada, porque possui alunos relacionados");
		}
		
	}
}
