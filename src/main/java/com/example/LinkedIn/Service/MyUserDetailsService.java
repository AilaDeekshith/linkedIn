package com.example.LinkedIn.Service;

import com.example.LinkedIn.Model.User;
import com.example.LinkedIn.Model.Userprinciple;
import com.example.LinkedIn.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;


    @Override
    public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {

        User user = userRepo.findByEmailId(emailId);
        if(user == null){
            System.out.println("user not found");
            throw new UsernameNotFoundException("user not found");
        }
        
        return new Userprinciple(user);
    }
}
