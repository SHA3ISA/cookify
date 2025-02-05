package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LoginService;
import com.example.demo.modal.Chef;
import com.example.demo.modal.Users;

@Controller
@RestController
@RequestMapping("api/v1/login")
@CrossOrigin
public class LoginController {
    @Autowired
    public LoginService loginService;

    @PostMapping("/user")
    public ResponseEntity<Users> userSigin(@RequestBody Users user){
        try {
            Users newuser = loginService.userSignIn(user.getUserID(), user.getPassword());
            return new ResponseEntity<>(newuser,HttpStatus.CREATED);
        } catch (Exception e) {
           return new ResponseEntity<>(HttpStatusCode.valueOf(500));
        }
        
    }
    @PostMapping("/chef")
    public ResponseEntity<Chef> chefSigin(@RequestBody Chef user){
        try {
            Chef newuser = loginService.chefSignIn(user.getChefID(), user.getPassword());
            return new ResponseEntity<>(newuser,HttpStatus.CREATED);
        } catch (Exception e) {
           return new ResponseEntity<>(HttpStatusCode.valueOf(500));
        }
        
    }
    @PutMapping("/isuser")
    public ResponseEntity<HttpStatus> loginUser(@RequestBody Users user){
        if(loginService.isUser(user.getUserID(), user.getPassword()))
        return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PutMapping("/ischef")
    public ResponseEntity<HttpStatus> loginUser(@RequestBody Chef user){
        if(loginService.ischef(user.getChefID(), user.getPassword()))
        return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
