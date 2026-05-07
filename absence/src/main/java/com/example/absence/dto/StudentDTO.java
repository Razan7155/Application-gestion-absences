package com.example.absence.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class StudentDTO {

    @NotBlank
    private String name;

    @Email
    private String email;

    @NotBlank
    private String filiere;
}