package com.example.agriback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.agriback.model.User;
import com.example.agriback.service.AuthService;

@RestController

public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/r")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User newUser = authService.saveUser(user);
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/l")
    public ResponseEntity<?> login(@RequestBody User user) {
        User loggedInUser = authService.login(user.getEmail(), user.getPassword());
        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(401).body("Login failed. Please check your credentials and try again.");
        }
    }
}
