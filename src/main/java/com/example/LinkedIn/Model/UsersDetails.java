package com.example.LinkedIn.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;
import java.util.ArrayList;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersDetails {

    @Transient
    public static final String userDetailsSequence = "userdetailsSequence";

    @Id
    private BigInteger id;
    private String emailId;
    private String name;
    private String designation;
    private String icon;
    private ArrayList<Experience> experience;
    private ArrayList<Education> education;
    private String skills[];
    private String language[];
    private ArrayList<Certifications> certifications;
}
