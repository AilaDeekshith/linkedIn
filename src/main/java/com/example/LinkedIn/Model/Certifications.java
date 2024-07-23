package com.example.LinkedIn.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Certifications {
    private String name;
    private String issuingOrganization;
    private Date issuedDate;
    private Date expirationDate;
    private String credentialId;
    private String credentialUrl;
}
