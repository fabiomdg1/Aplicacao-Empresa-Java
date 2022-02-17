package soulCode.Empresa.controller.exceptions;

import javax.servlet.ServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

import soulCode.Empresa.service.exceptions.ObjectNotFoundException;

@ControllerAdvice
public class ControllerExceptionHandler {

	//----- objectNotExceptionFoundException é o nome do método -----//
	//----- ObjectNotFoundException é a exceção -----//
	//----- A letra e recebe a mensagem de erro da exceção -----//
	public ResponseEntity<StandardError> objectNotExceptionFoundException(ObjectNotFoundException e, ServletRequest request){
		StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.NOT_FOUND.value(), e.getMessage());
	
		//----- .body(error) mostra apenas o corpo do erro ao invés do erro todo -----//
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}
	
	//public ResponseEntity<StandardError> DataIntegrityViolationException(DataIntegrityViolationException e, ServletRequest request){
		//StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.NOT_FOUND.value(), e.getMessage());
	
		//----- .body(error) mostra apenas o corpo do erro ao invés do erro todo -----//
		//return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	//}
}
