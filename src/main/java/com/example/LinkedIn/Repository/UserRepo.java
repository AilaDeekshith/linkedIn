package com.example.LinkedIn.Repository;

import com.example.LinkedIn.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface UserRepo extends MongoRepository<User, BigInteger>{
    User findByEmailId(String emailId);
}
