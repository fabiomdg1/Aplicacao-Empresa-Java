package soulCode.Empresa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonIgnore;



//---------------------- A anotação @Entity é utilizada para informar que uma classe também é uma entidade. ------------//
//---------------------- Uma entidade representa, na Orientação a Objetos, uma tabela do banco de dados-----------------//
//----------------------------Neste caso será criado no banco de dados uma tabela chamada Funcionario ------------------//
@Entity
public class Funcionario {
	
	//----------------------------------------------------ID da Aluno---------------------------------------------------------------------//
	//------- A notação @Id é utilizada para informar ao JPA qual campo/atributo de uma entidade estará relacionado à chave primária -----//
	//------- A notação @GeneratedValue responsabiliza o provedor de persistencia para que o Id_funcionario seja único -------------------//
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Cria chave primária
	private Integer Id_funcionario;

	
	//---------------------------------------------Coluna func_nome-----------------------------------------------------------//
	//----- A anotação @Column é usada para realizar o mapeamento do campo da entidade com uma coluna do banco de dados. -----//
	@Column(nullable = false, length = 60) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	private String func_nome;
	
	
	//---------------------------------------------Coluna func_cidade---------------------------------------------------------//
	//----- A anotação @Column é usada para realizar o mapeamento do campo da entidade com uma coluna do banco de dados. -----//
	@Column(nullable = false, length = 60) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	private String func_cidade;	
	
	@Column(nullable = false, length = 100)
	private String func_bairro;
	

	@Column(nullable = true, length = 100)
	private String func_email;
	
	@Column(nullable = true, length = 10)
	private Double func_salario;
	

	@Column(nullable = false, length = 20) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	private String func_telefone;
	
	@Column(nullable = true, length = 1000)
	private String func_observacao;


	//---------------------------------------------Coluna func_cargo----------------------------------------------------------//
	//----- A anotação @Column é usada para realizar o mapeamento do campo da entidade com uma coluna do banco de dados. -----//
	//@Column(nullable = false, length = 60) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	//private String func_cargo;

	

		//----- Verificar JsonIgnore e ManyToOne-----//
		@JsonIgnore
		@ManyToOne
		@JoinColumn(name = "id_cargo")
		private Cargo cargo;
		
		
	
	//----- Getters and Setters -----//
		

	public String getFunc_bairro() {
		return func_bairro;
	}

	public void setFunc_bairro(String func_bairro) {
		this.func_bairro = func_bairro;
	}

	public String getFunc_email() {
		return func_email;
	}

	public void setFunc_email(String func_email) {
		this.func_email = func_email;
	}

	public Double getFunc_salario() {
		return func_salario;
	}

	public void setFunc_salario(Double func_salario) {
		this.func_salario = func_salario;
	}
	
	public String getFunc_observacao() {
		return func_observacao;
	}

	public void setFunc_observacao(String func_observacao) {
		this.func_observacao = func_observacao;
	}	
		
	public String getFunc_telefone() {
		return func_telefone;
	}

	public void setFunc_telefone(String func_telefone) {
		this.func_telefone = func_telefone;
	}
	
	public Integer getId_funcionario() {
		return Id_funcionario;
	}

	public void setId_funcionario(Integer id_funcionario) {
		Id_funcionario = id_funcionario;
	}

	public String getFunc_nome() {
		return func_nome;
	}

	public void setFunc_nome(String func_nome) {
		this.func_nome = func_nome;
	}

	public String getFunc_cidade() {
		return func_cidade;
	}

	public void setFunc_cidade(String func_cidade) {
		this.func_cidade = func_cidade;
	}

	//public Cargo getFunc_cargo() {
		//return cargo;
	//}
	
	public Cargo getCargo() {
		return cargo;
	}

	//public void setFunc_cargo(Cargo func_cargo) {
		//this.cargo = func_cargo;
	//}
	
	public void setCargo (Cargo cargo) {
		this.cargo = cargo;
	}
}