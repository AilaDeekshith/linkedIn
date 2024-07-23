package com.example.LinkedIn.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.math.BigInteger;

@Component
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPost {

    @Transient
    public static final String JOBPOSTSEQ = "jobPostSequence";

    @Id
    private BigInteger id;
    private String role;
    private String organization;
    private String location;
    private String jobType;
    private String organizationIcon;
}
