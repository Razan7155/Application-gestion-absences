package com.example.absence.mapper;

import com.example.absence.dto.StudentDTO;
import com.example.absence.entity.Student;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {

    public Student toEntity(StudentDTO dto) {
        return Student.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .filiere(dto.getFiliere())
                .build();
    }
}