package com.example.LinkedIn.Controller;

import com.example.LinkedIn.Model.JobPost;
import com.example.LinkedIn.Model.Post;
import com.example.LinkedIn.Service.JobPostService;
import com.example.LinkedIn.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class HomeController {

    @Autowired
    private PostService postService;

    @Autowired
    private JobPostService jobPostService;

    @GetMapping("/about")
    public String greet(){
        return "Hello Good Morning";
    }

    @GetMapping("/getAllPosts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @PostMapping("/addPost")
    public void addPost(@RequestBody Post post) throws IOException {
        postService.addPost(post);
    }

    @GetMapping("/getAllJobPosts")
    public List<JobPost> getAllJobPosts(){
        return jobPostService.getAllJobPosts();
    }

    @PostMapping("/addJobPost")
    public void addJobPost(@RequestBody JobPost jobPost) throws IOException {
        jobPostService.addJobPost(jobPost);
    }

    @PutMapping("/updatePost/likes")
    public void updatePostLikes(@RequestBody Post post) throws IOException {
        post.setLikes(post.getLikes()+1);
        postService.updatePost(post);
    }

    @PutMapping("/updatePost/comments")
    public void updatePostComments(@RequestBody Post post) throws IOException {
        post.setComments(post.getComments()+1);
        postService.updatePost(post);
    }

    @PutMapping("/updatePost/reposts")
    public void updatePostReposts(@RequestBody Post post) throws IOException {
        post.setReposts(post.getReposts()+1);
        postService.updatePost(post);
    }


    @PutMapping("/updateJobPost")
    public void updateJobPost(@RequestBody JobPost jobPost) throws IOException {
        jobPostService.updateJobPost(jobPost);
    }
}
