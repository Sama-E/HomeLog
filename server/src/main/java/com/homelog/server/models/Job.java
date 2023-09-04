package com.homelog.server.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Job {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Size(min = 5, max = 200)
	private String homeowner;
	@NotNull
	@Size(min = 5, max = 200)
	private String contractor;
	@NotNull
	@Size(min = 5, max = 200)
	private String title;
	@NotNull
	@Size(min = 5, max = 200)
	private String type;
	@NotNull
	@Size(min = 5, max = 200)
	private String priority;
	@NotNull
	@Size(min = 5, max = 200)
	private String category;
	@NotNull
	@Size(min = 5, max = 200)
	private String description;

}
