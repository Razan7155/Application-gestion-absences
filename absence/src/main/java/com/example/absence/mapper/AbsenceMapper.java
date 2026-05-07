package com.example.absence.mapper;

import com.example.absence.dto.AbsenceDTO;
import com.example.absence.entity.Absence;
import com.example.absence.entity.Student;
import org.springframework.stereotype.Component;

@Component
public class AbsenceMapper {

    public Absence toEntity(AbsenceDTO dto, Student student) {
        return Absence.builder()
                .date(dto.getDate())
                .matiere(dto.getMatiere())
                .justification(dto.getJustification())
                .student(student)
                .build();
    }
}
