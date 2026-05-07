package com.example.absence.controller;

import com.example.absence.dto.AbsenceDTO;
import com.example.absence.entity.Absence;
import com.example.absence.service.AbsenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/absences")
@RequiredArgsConstructor
public class AbsenceController {

    private final AbsenceService service;

    @PostMapping
    public Absence create(@RequestBody AbsenceDTO dto) {
        return service.create(dto);
    }

    @PutMapping("/{id}")
    public Absence update(@PathVariable Long id,
                          @RequestBody AbsenceDTO dto) {
        return service.update(id, dto);
    }

    @GetMapping
    public List<Absence> getAll() {
        return service.getAll();
    }

    @GetMapping("/search")
    public List<Absence> search(
            @RequestParam(required = false) String matiere,
            @RequestParam(required = false) LocalDate date,
            @RequestParam(required = false) String student) {

        return service.search(matiere, date, student);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}