package com.example.LinkedIn.Service;

import com.example.LinkedIn.Model.User;
import com.example.LinkedIn.Model.UsersDetails;
import com.example.LinkedIn.Repository.UserRepo;
import com.example.LinkedIn.Repository.UsersDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UsersDetailsRepository usersDetailsRepository;

    @Autowired
    private SequenceGenerator sequenceGenerator;

    public User save(User user) {
        user.setId(BigInteger.valueOf(sequenceGenerator.generateSequence(User.USERSEQ)));
        user.setPassword(new BCryptPasswordEncoder(BCryptPasswordEncoder.BCryptVersion.$2A,12).encode(user.getPassword()));
        return  userRepo.save(user);
    }

    public void addUser(UsersDetails usersDetails) {
        usersDetails.setId(BigInteger.valueOf(sequenceGenerator.generateSequence(UsersDetails.userDetailsSequence)));
        usersDetailsRepository.save(usersDetails);
    }

    public UsersDetails getUser(String emailId) {
        return usersDetailsRepository.findByEmailId(emailId);
    }

    public List<UsersDetails> getAllUsersDetails() {
        return usersDetailsRepository.findAll();
    }

    public void updateUser(UsersDetails usersDetails) {
        usersDetailsRepository.save(usersDetails);
    }
}
