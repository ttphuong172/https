package com.example.httpsbe.repository;

import com.example.httpsbe.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Integer> {
}
