package com.homelog.server.controllers;

import com.homelog.server.models.Job;
import com.homelog.server.services.IJobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/jobs")
@RequiredArgsConstructor
public class JobController {
	private final IJobService jobService;

	@GetMapping
	public ResponseEntity<List<Job>> getJobs(){
		return new ResponseEntity<>(jobService.getJobs(), HttpStatus.FOUND);
	}

	@PostMapping
	public Job addJob(@RequestBody Job job){
		return jobService.addJob(job);
	}

	@PutMapping("/update/{id}")
	public Job update(
			@RequestBody Job job,
			@PathVariable Long id){
		return jobService.updateJob(job, id);
	}

	@DeleteMapping("/delete/{id}")
	public void deleteJob(@PathVariable Long id){
		jobService.deleteJob(id);
	}

	@GetMapping("/job/{id}")
	public Job getJobById(@PathVariable Long id){
		return jobService.getJobById(id);
	}
}
