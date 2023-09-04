package com.homelog.server.exceptions;

public class JobNotFoundException extends RuntimeException{
	public JobNotFoundException(String message){
		super(message);
	}
}
