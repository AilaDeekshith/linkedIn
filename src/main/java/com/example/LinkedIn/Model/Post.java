package com.example.LinkedIn.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.math.BigInteger;

@Component
@Data
@Document
public class Post {

    @Transient
    public static final String POSTSEQ = "postSequence";


    @Id
    private BigInteger id;
    private String userEmailId;
    private String userName;
    private String role;
    private String icon;
    private String image;
    private String description;
    private int likes;
    private int comments;
    private int reposts;
}
