package soulCode.Empresa.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soulCode.Empresa.model.Funcionario;


//----- A Interface JpaRepository disponibiliza 11 métodos para tratar o CRUD -----//
//----- Esta Interface será instanciada na classe controller -----//
public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer>{
	//-------------- A notação @Query informa que vamos usar uma consulta SQL --------------//
	//-------------- A notação @nativeQuery informa que é uma query nativa do SQL ----------//
	@Query(value = "select * from funcionario where id_cargo = :id_cargo", nativeQuery = true)
	List <Funcionario> fetchByCargo(Integer id_cargo);
}
