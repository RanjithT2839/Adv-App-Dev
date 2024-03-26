package com.backend.seniorcare.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.seniorcare.Dto.UpdateRequest;
import com.backend.seniorcare.Model.User;

import io.micrometer.common.lang.NonNull;
import com.backend.seniorcare.Repository.UserRepository;

@Service
public class UserService {
    
    @Autowired 
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    public Optional<User> getUserByEmail(String email)
    {
        return userRepository.findByEmail(email);
    }

    public Optional<User> getUserById(Integer userId)
    {
        return userRepository.findById(userId);
    }

    public User createUser(User user)
    {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User updateUser(String email, UpdateRequest updateRequest)
    {
        return userRepository.findByEmail(email)
                .map(oldUser -> {
                    oldUser.setName(updateRequest.getName());
                    oldUser.setEmail(updateRequest.getEmail());
                    oldUser.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
                    return userRepository.save(oldUser);
                })
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }

    public void deleteAllUsers()
    {
        userRepository.deleteAll();
    }
    
    public void deleteUser(@NonNull Integer userId)
    {
        if(userRepository.existsById(userId))
            userRepository.deleteById(userId);
    }

}
