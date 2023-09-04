package com.homelog.server.services;

import com.homelog.server.models.Job;

import java.util.List;

public interface IJobService {
	Job addJob(Job job);
	List<Job> getJobs();
	Job updateJob(Job job, Long id);
	Job getJobById(Long id);
	void deleteJob(Long id);

}
