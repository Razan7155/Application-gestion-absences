package com.example.absence.service.impl;

import com.example.absence.dto.StudentDTO;
import com.example.absence.entity.Student;
import com.example.absence.mapper.StudentMapper;
import com.example.absence.repository.StudentRepository;
import com.example.absence.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repo;
    private final StudentMapper mapper;

    public Student create(StudentDTO dto) {
        return repo.save(mapper.toEntity(dto));
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student update(Long id, StudentDTO dto) {
        Student s = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        s.setName(dto.getName());
        s.setEmail(dto.getEmail());
        s.setFiliere(dto.getFiliere());

        return repo.save(s);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}