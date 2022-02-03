package com.cdac.entity;

import javax.persistence.*;

@Entity
public class User {
	
	@Id
	@Column
	private String email;
	private String name;
	private String password;
	private String mobileNo;
	
	public User() {
		super();
	}

	public User(String email, String name, String password, String mobileNo) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
		this.mobileNo = mobileNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	@Override
	public String toString() {
		return "User [email=" + email + ", name=" + name + ", password=" + password + ", mobileNo=" + mobileNo + "]";
	}

}
