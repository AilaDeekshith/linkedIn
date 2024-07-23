package com.example.LinkedIn.Repository;

import com.example.LinkedIn.Model.JobPost;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface JobPostRepository extends MongoRepository<JobPost, BigInteger> {
}
