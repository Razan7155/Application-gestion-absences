package com.example.absence.repository;

import com.example.absence.entity.Absence;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AbsenceRepository extends JpaRepository<Absence, Long> {

    List<Absence> findByMatiereContaining(String matiere);
    List<Absence> findByDate(LocalDate date);
    List<Absence> findByStudent_NameContaining(String name);
}