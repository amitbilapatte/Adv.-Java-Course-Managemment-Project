package com.cdac.services;

import java.util.List;

import com.cdac.entity.Course;
import com.cdac.entity.User;

public interface UserServices {
	
	public List<User> getUsers();

	public User getUser(String email);

	public User addUser(User user);

	public User updateUser(User user);

	public void deleteUser(String eId);
}
