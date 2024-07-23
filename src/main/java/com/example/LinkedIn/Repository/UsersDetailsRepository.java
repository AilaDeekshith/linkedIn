package com.example.LinkedIn.Repository;

import com.example.LinkedIn.Model.UsersDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface UsersDetailsRepository extends MongoRepository<UsersDetails, BigInteger> {
    UsersDetails findByEmailId(String emailId);
}
