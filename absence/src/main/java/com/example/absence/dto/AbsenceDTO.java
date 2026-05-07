package com.example.absence.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class AbsenceDTO {

    @NotNull
    private LocalDate date;

    private String matiere;
    private String justification;

    @NotNull
    private Long studentId;
}