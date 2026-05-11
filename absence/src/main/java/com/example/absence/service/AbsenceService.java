package com.example.absence.service;

import com.example.absence.dto.AbsenceDTO;
import com.example.absence.entity.Absence;

import java.time.LocalDate;
import java.util.List;

public interface AbsenceService {

    Absence create(AbsenceDTO dto);

    Absence update(Long id, AbsenceDTO dto);

    List<Absence> getAll();

    List<Absence> search(
            String matiere,
            LocalDate date,
            String student
    );

    void delete(Long id);
}