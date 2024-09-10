package com.uneb.labweb.spring_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uneb.labweb.spring_project.model.Course;

@Repository
public interface CourseRepository  extends JpaRepository<Course, Long>{

}
