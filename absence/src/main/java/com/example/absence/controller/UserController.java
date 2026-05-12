package com.example.absence.controller;

import com.example.absence.entity.User;
import com.example.absence.repository.UserRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }
}