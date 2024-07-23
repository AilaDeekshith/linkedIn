package com.example.LinkedIn.Model;

import lombok.Data;
import org.springframework.context.annotation.Scope;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.math.BigInteger;

@Component
@Data
@Document(value = "Users")
@Scope(value = "prototype")
public class User {

    @Transient
    public static final String USERSEQ = "userSequence";

    @Id
    private BigInteger id;
    private String emailId;
    private String password;
}
