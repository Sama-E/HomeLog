package com.homelog.server.repositories;

import com.homelog.server.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobRepository extends JpaRepository<Job, Long> {
	Optional<Job> findByTitle(String title);
	Optional<Job> findByHomeowner(String homeowner);
}
