package com.backend.seniorcare.Controller;

import org.springframework.web.bind.annotation.*;

import com.backend.seniorcare.Dto.UpdateRequest;
import com.backend.seniorcare.Model.User;
import com.backend.seniorcare.Service.UserService;

import org.springframework.lang.NonNull;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequestMapping("/api/users")
public class UserController
{
    @Autowired
    private UserService userService;

    @GetMapping("/getUser/{email}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email)
    {
        Optional<User> user = userService.getUserByEmail(email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    // @GetMapping("/getUser/{id}")
    // @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    // public ResponseEntity<?> getUserById(@PathVariable Integer userId)
    // {
    //     Optional<User> user = userService.getUserById(userId);
    //     return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
    //                 .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    // }

    @GetMapping("/getAllUsers")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getAllUsers()
    {
        List<User> users =  userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@NonNull @RequestBody User user)
    {
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/updateUser/{email}")
    @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<User> updateUser(@NonNull @PathVariable String email,
            @RequestBody UpdateRequest updateRequest) {
        User updated = userService.updateUser(email, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("/deleteUser/{userId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> removeUser(@NonNull @PathVariable Integer userId) {
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/deleteUsers")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> delete()
    {
        userService.deleteAllUsers();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
