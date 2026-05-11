package com.example.absence.controller;

import com.example.absence.dto.StudentDTO;
import com.example.absence.entity.Student;
import com.example.absence.service.StudentService;

import jakarta.validation.Valid;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService service;

    @PostMapping
    public Student create(
            @Valid @RequestBody StudentDTO dto
    ) {

        return service.create(dto);
    }

    @GetMapping
    public List<Student> getAll() {

        return service.getAll();
    }

    @GetMapping("/search")
    public List<Student> search(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String filiere
    ) {

        return service.search(keyword, filiere);
    }

    @PutMapping("/{id}")
    public Student update(
            @PathVariable Long id,
            @RequestBody StudentDTO dto
    ) {

        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {

        service.delete(id);
    }
}