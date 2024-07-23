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
public class Experience {
    private String title;
    private String organizationName;
    private String organizationIcon;
    private String employmentType;
    private String location;
    private String locationType;
    private Date startDate;
    private Date endDate;
}
