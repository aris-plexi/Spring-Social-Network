/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.connector.beta.controllers;

import com.connector.beta.entities.MyUser;
import com.connector.beta.services.UserServiceInterface;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author korov
 */

@Controller
public class UserRestController {
    
    @Autowired
    UserServiceInterface userServiceInterface;
    
    @ResponseBody
    @PostMapping("/searchUser")
    public List<MyUser> searchUser() {
        return userServiceInterface.searchUsersByName("Alexandros");
    }
    
    @ResponseBody
    @GetMapping("/testGetMethod")
    public List<MyUser> testGetMethod() {
        return userServiceInterface.searchUsersByName("Alexandros");
    }
    
}
