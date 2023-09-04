package com.homelog.server.services;

import com.homelog.server.exceptions.JobAlreadyExistsException;
import com.homelog.server.exceptions.JobNotFoundException;
import com.homelog.server.models.Job;
import com.homelog.server.repositories.JobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService implements IJobService{
	private final JobRepository jobRepository;
	@Override
	public List<Job> getJobs(){
		return jobRepository.findAll();
	}

	@Override
	public Job addJob(Job job){
		if (jobAlreadyExists(job.getTitle())){
			throw  new JobAlreadyExistsException(job.getTitle()+ " already exists!");
		}
		return jobRepository.save(job);
	}

	@Override
	public Job updateJob(Job job, Long id) {
		return jobRepository.findById(id).map(st -> {
			st.setContractor(job.getContractor());
			st.setTitle(job.getTitle());
			st.setType(job.getType());
			st.setCategory(job.getCategory());
			st.setDescription(job.getDescription());
			return jobRepository.save(st);
		}).orElseThrow(() -> new JobNotFoundException("Sorry, this job could not be found"));
	}

	@Override
	public Job getJobById(Long id) {
		return jobRepository.findById(id)
				.orElseThrow(() -> new JobNotFoundException("Sorry, no job found with the Id :" +id));
	}

	@Override
	public void deleteJob(Long id) {
		if (!jobRepository.existsById(id)){
			throw new JobNotFoundException("Sorry, job not found");
		}
		jobRepository.deleteById(id);
	}
	private boolean jobAlreadyExists(String title) {
		return jobRepository.findByTitle(title).isPresent();
	}


	}
