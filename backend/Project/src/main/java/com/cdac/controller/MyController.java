package com.cdac.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.entity.Course;
import com.cdac.entity.User;
import com.cdac.services.CourseService;
import com.cdac.services.UserServices;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MyController {
	
	@Autowired
	private CourseService courseService;

	//Course API
	
	@GetMapping("/cources")
	public List<Course> getCourses() {
		return this.courseService.getCourses();
	}
	
	@GetMapping("/cources/{courseId}")
	public Course getCourse(@PathVariable String CourseId) {
		return this.courseService.getCourse(Long.parseLong(CourseId));
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	
	@DeleteMapping("/deleteCourse/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
		try {
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//User API
	
	@Autowired
	private UserServices userServices;

	@GetMapping("/users")
	public List<User> getUsers() {
		return this.userServices.getUsers();
	}
	
	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String CourseId) {
		return this.userServices.getUser(CourseId);
	}
	
	@PostMapping("/users")
	public User addCourse(@RequestBody User user) {
		return this.userServices.addUser(user);
	}
	
	@PutMapping("/users")
	public User updateUser(@RequestBody User user) {
		return this.userServices.updateUser(user);
	}
	
	@DeleteMapping("/deleteusers/{usersId}")
	public ResponseEntity<HttpStatus> deleteUser(@PathVariable String usersId){
		try {
			this.userServices.deleteUser(usersId);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
