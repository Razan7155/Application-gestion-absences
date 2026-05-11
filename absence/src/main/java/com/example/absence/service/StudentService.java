package com.example.absence.service;

import com.example.absence.dto.StudentDTO;
import com.example.absence.entity.Student;

import java.util.List;

public interface StudentService {

    Student create(StudentDTO dto);

    List<Student> getAll();

    List<Student> search(
            String keyword,
            String filiere
    );

    Student update(Long id, StudentDTO dto);

    void delete(Long id);
}