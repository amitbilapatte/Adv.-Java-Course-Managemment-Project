package com.cdac.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.Course;

public interface CourseDao extends JpaRepository<Course, Long>{
	
}
