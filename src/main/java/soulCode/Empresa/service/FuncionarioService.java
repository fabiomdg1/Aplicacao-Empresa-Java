package soulCode.Empresa.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import soulCode.Empresa.model.Cargo;
import soulCode.Empresa.model.Funcionario;
import soulCode.Empresa.repository.FuncionarioRepository;

//----- Na classe Service é onde vamos criar nossos serviços de comunicação com o Banco de Dados, o CRUD -----//
@Service
public class FuncionarioService {
	
	//----- Vamos criar um objeto do tipo JpaRepository através da criação de um objeto do Tipo AlunoRepository -----//

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private CargoService cargoService;
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- Listar Todos os Funcionários-----------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	//----- Vamos criar o serviço de listagem dos Funcionários -----//
	//----- Vamos usar o método findAll() que é 1 dos 11 métodos disponíveis do JpaRepository -----//
	
	public List <Funcionario> mostrarTodosFuncionarios(){
		return funcionarioRepository.findAll();
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- Listar Todos os Funcionários com Cargo ------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	public List<List> funcionariosComCargo(){		
		return funcionarioRepository.funcionariosComCargo();
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- Listar Apenas 1 Funcionários-----------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	//----- O Id_funcionario é o parâmetro que vamos usar para efetuar a busca do funcionário -----//
	//----- O Optional verifica se o registro buscado existe, caso não existir, isto não vai parar a aplicação -----//	
	
	public Funcionario buscarUmFuncionario(Integer Id_funcionario) {
		Optional<Funcionario> funcionario = funcionarioRepository.findById(Id_funcionario);
		return funcionario.orElseThrow();
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//----------------------------------------- Buscar Funcionários por Cargo ---------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	public List<Funcionario> buscarFuncionarioCargo(Integer id_funcionario){
		//List<Funcionario> funcionario = alunoRepository.fetchByTurma(id_turma);
		List<Funcionario> funcionario = funcionarioRepository.fetchByCargo(id_funcionario);
		return funcionario;
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//-------------------------------------------- Inserir 1 Funcionário --------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	
	public Funcionario inserirFuncionario(Integer id_cargo,Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		Cargo cargo = cargoService.buscarUmCargo(id_cargo);
		funcionario.setCargo(cargo);
		return funcionarioRepository.save(funcionario);
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//-------------------------------------------- Deletar 1 Funcionário --------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	
	public void deletarFuncionario(Integer Id_funcionario) {
		funcionarioRepository.deleteById(Id_funcionario);
	}
	
	
	//---------------------------------------------------------------------------------------------------------------//
	//-------------------------------------------- Editar 1 Funcionário --------------------------------------------//
	//---------------------------------------------------------------------------------------------------------------//
	public Funcionario editarFuncionario(Funcionario funcionario) {
		buscarUmFuncionario(funcionario.getId_funcionario());
		return funcionarioRepository.save(funcionario);
	}
		

}