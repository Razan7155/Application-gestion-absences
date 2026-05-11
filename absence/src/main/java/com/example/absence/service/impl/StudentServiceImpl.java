package com.example.absence.service.impl;

import com.example.absence.dto.StudentDTO;
import com.example.absence.entity.Student;
import com.example.absence.repository.StudentRepository;
import com.example.absence.service.StudentService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    @Override
    public Student create(StudentDTO dto) {

        Student student = Student.builder()

                .name(dto.getName())

                .email(dto.getEmail())

                .filiere(dto.getFiliere())

                .build();

        return repository.save(student);
    }

    @Override
    public List<Student> getAll() {

        return repository.findAll();
    }

    @Override
    public Student update(Long id, StudentDTO dto) {

        Student student = repository.findById(id)

                .orElseThrow(() -> new RuntimeException("Student not found"));

        student.setName(dto.getName());

        student.setEmail(dto.getEmail());

        student.setFiliere(dto.getFiliere());

        return repository.save(student);
    }

    @Override
    public void delete(Long id) {

        repository.deleteById(id);
    }

    @Override
    public List<Student> search(String name, String filiere) {

        if (name != null && !name.isEmpty()) {

            return repository.findByNameContaining(name);
        }

        if (filiere != null && !filiere.isEmpty()) {

            return repository.findByFiliereContaining(filiere);
        }

        return repository.findAll();
    }
}