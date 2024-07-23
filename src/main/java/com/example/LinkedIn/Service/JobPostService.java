package com.example.LinkedIn.Service;

import com.example.LinkedIn.Model.JobPost;
import com.example.LinkedIn.Repository.JobPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigInteger;
import java.util.List;

@Service
public class JobPostService {

    @Autowired
    private JobPostRepository jobPostRepository;

    @Autowired
    private SequenceGenerator sequenceGenerator;

    public void addJobPost(JobPost jobPost) throws IOException {
        JobPost jobPost1 = new JobPost();

        jobPost1.setJobType(jobPost.getJobType());
        jobPost1.setLocation(jobPost.getLocation());
        jobPost1.setRole(jobPost.getRole());
        jobPost1.setOrganization(jobPost.getOrganization());
        jobPost1.setOrganizationIcon(jobPost.getOrganizationIcon());
        jobPost1.setId(BigInteger.valueOf(sequenceGenerator.generateSequence(JobPost.JOBPOSTSEQ)));
        jobPostRepository.save(jobPost1);
    }

    public List<JobPost> getAllJobPosts() {
        return jobPostRepository.findAll();
    }

    public void updateJobPost(JobPost jobPost) {
        jobPostRepository.save(jobPost);
    }
}
