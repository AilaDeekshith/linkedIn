package com.example.LinkedIn.Service;

import com.example.LinkedIn.Model.JobPost;
import com.example.LinkedIn.Model.Post;
import com.example.LinkedIn.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigInteger;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private SequenceGenerator sequenceGenerator;

    public void addPost(Post post) throws IOException {
        post.setId(BigInteger.valueOf(sequenceGenerator.generateSequence(Post.POSTSEQ)));
        postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public void updatePost(Post post) {
        postRepository.save(post);
    }
}

