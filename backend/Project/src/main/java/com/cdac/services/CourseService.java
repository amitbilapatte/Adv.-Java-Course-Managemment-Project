package com.cdac.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.cdac.entity.Course;

@Component
public interface CourseService {
	
	public List<Course> getCourses();

	public Course getCourse(long courseId);

	public Course addCourse(Course course);

	public Course updateCourse(Course course);

	public void deleteCourse(long parseLong);
}
