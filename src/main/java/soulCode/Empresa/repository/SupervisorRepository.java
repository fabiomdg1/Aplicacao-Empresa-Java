package soulCode.Empresa.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import soulCode.Empresa.model.Supervisor;


public interface SupervisorRepository extends JpaRepository<Supervisor, Integer>{
	
		@Query(value="select * from supervisor where id_cargo = :id_cargo", nativeQuery = true)		
		Supervisor buscaSupervisorDoCargo(Integer id_cargo);
		
	}



