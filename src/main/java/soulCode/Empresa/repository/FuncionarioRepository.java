package soulCode.Empresa.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import soulCode.Empresa.model.Funcionario;

//----- A Interface JpaRepository disponibiliza 11 métodos para tratar o CRUD -----//
//----- Esta Interface será instanciada na classe controller -----//
public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer>{
	
}
