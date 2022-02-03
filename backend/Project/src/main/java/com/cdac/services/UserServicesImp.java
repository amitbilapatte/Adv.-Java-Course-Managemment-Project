package com.cdac.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.dao.UserDao;
import com.cdac.entity.User;

@Service
public class UserServicesImp implements UserServices {
	
	@Autowired
	UserDao userDao;
	
	@Override
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@Override
	public User getUser(String email) {
		return userDao.getById(email);
	}

	@Override
	public User addUser(User user) {
		return userDao.save(user);
	}

	@Override
	public User updateUser(User user) {
		return userDao.save(user);
	}

	@Override
	public void deleteUser(String eId) {
		User user = userDao.getById(eId);
		userDao.delete(user);
	}

}
