package com.example.httpsbe.service;

import com.example.httpsbe.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> findAll();
    void save(Student student);
}
