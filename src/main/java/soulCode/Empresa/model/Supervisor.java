package soulCode.Empresa.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;


@Entity
public class Supervisor {			
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Integer id_supervisor;
		
		@Column(nullable = false, length=40)
		private String sup_nome;
		
		@Column(nullable = true, length=40)
		private String sup_formacao;
		
		@OneToOne
		@JoinColumn(name = "id_cargo", unique = true)	
		private Cargo cargo;
		
		
		
		//----- Getters and Setters -----//
		
		public Integer getId_supervisor() {
			return id_supervisor;
		}

		public void setId_supervisor(Integer id_supervisor) {
			this.id_supervisor = id_supervisor;
		}

		public String getSup_nome() {
			return sup_nome;
		}

		public void setSup_nome(String sup_nome) {
			this.sup_nome = sup_nome;
		}

		public String getSup_formacao() {
			return sup_formacao;
		}
		public void setSup_formacao(String sup_formacao) {
			this.sup_formacao = sup_formacao;
		}

		public Cargo getCargo() {
			return cargo;
		}

		public void setCargo(Cargo cargo) {
			this.cargo = cargo;
		}		
		
	}	
	
	