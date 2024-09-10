package com.uneb.labweb.spring_project;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.uneb.labweb.spring_project.model.Course;
import com.uneb.labweb.spring_project.repository.CourseRepository;

@SpringBootApplication
public class SpringProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringProjectApplication.class, args);
	}

  @Bean
  CommandLineRunner initDatabase(CourseRepository courseRepository){
      return  args->{
        courseRepository.deleteAll();
        Course c = new Course();
        c.setName("Curso Angular");
        c.setCategory("Front-end");
        courseRepository.save(c);
      };
    }
}
