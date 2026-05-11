package com.example.absence.dto;

import com.example.absence.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String username;

    private String email;

    private String password;

    private Role role;
}