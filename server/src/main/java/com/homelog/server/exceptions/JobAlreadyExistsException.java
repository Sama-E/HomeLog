package com.homelog.server.exceptions;

public class JobAlreadyExistsException extends RuntimeException{
	public JobAlreadyExistsException(String message){
		super(message);
	}
}
