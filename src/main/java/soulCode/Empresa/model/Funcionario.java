package soulCode.Empresa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity // Cria tabela com nome Funcionario
public class Funcionario {
	
	@Id // Cria ID
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Cria chave primária
	private Integer Id_funcionario;
	
	@Column(nullable = false, length = 60) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	private String func_nome;
	
	@Column(nullable = false, length = 60) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	private String func_cidade;

	@Column(nullable = false, length = 60) // Campo não pode ser nulo, tamanho máximo de 60 caracteres
	private String func_cargo;

	
	
	//----- Getters and Setters -----// 
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

	public String getFunc_cargo() {
		return func_cargo;
	}

	public void setFunc_cargo(String func_cargo) {
		this.func_cargo = func_cargo;
	}
}
