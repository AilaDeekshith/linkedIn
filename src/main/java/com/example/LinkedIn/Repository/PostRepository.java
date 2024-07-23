package com.example.LinkedIn.Repository;

import com.example.LinkedIn.Model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface PostRepository extends MongoRepository<Post, BigInteger> {
}
