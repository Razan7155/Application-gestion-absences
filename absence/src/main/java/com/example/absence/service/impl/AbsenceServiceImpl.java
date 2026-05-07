
package com.example.absence.service.impl;
import com.example.absence.dto.AbsenceDTO;
import com.example.absence.entity.Absence;
import com.example.absence.entity.Student;
import com.example.absence.mapper.AbsenceMapper;
import com.example.absence.repository.AbsenceRepository;
import com.example.absence.repository.StudentRepository;
import com.example.absence.service.AbsenceService;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AbsenceServiceImpl implements AbsenceService {

    private final AbsenceRepository repo;
    private final StudentRepository studentRepo;
    private final AbsenceMapper mapper;

    public Absence create(AbsenceDTO dto) {

        Student student = studentRepo.findById(dto.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        return repo.save(mapper.toEntity(dto, student));
    }

    public Absence update(Long id, AbsenceDTO dto) {

        Absence a = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Absence not found"));

        a.setDate(dto.getDate());
        a.setMatiere(dto.getMatiere());
        a.setJustification(dto.getJustification());

        return repo.save(a);
    }

    public List<Absence> getAll() {
        return repo.findAll();
    }

    public List<Absence> search(String matiere, LocalDate date, String student) {

        if (student != null)
            return repo.findByStudent_NameContaining(student);

        if (matiere != null)
            return repo.findByMatiereContaining(matiere);

        if (date != null)
            return repo.findByDate(date);

        return repo.findAll();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}