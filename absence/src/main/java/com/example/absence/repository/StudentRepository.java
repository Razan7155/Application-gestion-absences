package com.example.absence.repository;

import com.example.absence.entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student, Long> {

    List<Student> findByNameContaining(String name);

    List<Student> findByFiliereContaining(String filiere);
}