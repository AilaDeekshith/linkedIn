package com.example.LinkedIn.Controller;

import com.example.LinkedIn.Model.User;

import com.example.LinkedIn.Model.UsersDetails;
import com.example.LinkedIn.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public User addUser(@RequestBody User user){
        return userService.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getEmailId(),user.getPassword()));
        if(authentication.isAuthenticated())
            return "login success";
        else
            return "Failed";
    }

    @GetMapping("/getUser/{emailId}")
    public UsersDetails getUser(@PathVariable String emailId){
        return userService.getUser(emailId);
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody UsersDetails usersDetails){
        userService.addUser(usersDetails);
    }

    @GetMapping("/getAllUsersDetails")
    public List<UsersDetails> getAllUsersDetails(){
        return userService.getAllUsersDetails();
    }

    @PutMapping("/addUser")
    public void updateUser(@RequestBody UsersDetails usersDetails){
        userService.updateUser(usersDetails);
    }
}