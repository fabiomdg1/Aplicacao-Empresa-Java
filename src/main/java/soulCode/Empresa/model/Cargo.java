package soulCode.Empresa.model;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;


//---------------------- A anotação @Entity é utilizada para informar que uma classe também é uma entidade. ------------//
//---------------------- Uma entidade representa, na Orientação a Objetos, uma tabela do banco de dados-----------------//
//----------------------------Neste caso será criado no banco de dados uma tabela chamada Cargo ------------------------//
@Entity
public class Cargo {		
		
		//----------------------------------------------------ID da Cargo---------------------------------------------------------------------//
		//------- A notação @Id é utilizada para informar ao JPA qual campo/atributo de uma entidade estará relacionado à chave primária -----//
		//------- A notação @GeneratedValue responsabiliza o provedor de persistencia para que o id_cargo seja único -------------------------// 
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Integer id_cargo;
		
		//---------------------------------------------Coluna car_nome------------------------------------------------------------//
		//----- A anotação @Column é usada para realizar o mapeamento do campo da entidade com uma coluna do banco de dados. -----// 
		@Column(nullable = false, length=60)
		private String car_nome;
		
		//---------------------------------------------Coluna car_atribuição------------------------------------------------------//
		//----- A anotação @Column é usada para realizar o mapeamento do campo da entidade com uma coluna do banco de dados. -----//
		@Column(nullable = false, length=60)
		private String car_atribuicao;
		
		//----------------------------------- Um cargo pode ter um Array de Funcionarios --------------------------------------//
		//---------------------------------------- Relacionamento OneToMany----------------------------------------------------//
		//----- A notação @OneToMany significa que uma entidade está relacionado com vários registros de outras entidades -----//
		@OneToMany(mappedBy = "cargo")
		private List<Funcionario> funcionario = new ArrayList<>();

		@OneToOne
		@JoinColumn(name = "id_supervisor", unique = true)	
		private Supervisor supervisor;
		
		
		
		
		//----- Getters and Setters -----//
		
		public Supervisor getSupervisor() {
			return supervisor;
		}

		public void setSupervisor(Supervisor supervisor) {
			this.supervisor = supervisor;
		}

		public Integer getId_cargo() {
			return id_cargo;
		}

		public void setId_cargo(Integer id_cargo) {
			this.id_cargo = id_cargo;
		}

		public String getCar_nome() {
			return car_nome;
		}

		public void setCar_nome(String car_nome) {
			this.car_nome = car_nome;
		}

		public String getCar_atribuicao() {
			return car_atribuicao;
		}

		public void setCar_atribuicao(String car_atribuicao) {
			this.car_atribuicao = car_atribuicao;
		}

		public List<Funcionario> getFuncionario() {
			return funcionario;
		}

		public void setFuncionario(List<Funcionario> funcionario) {
			this.funcionario = funcionario;
		}

}