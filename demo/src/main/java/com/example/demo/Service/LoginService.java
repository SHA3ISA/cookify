package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Chef;
import com.example.demo.modal.Users;
import com.example.demo.repo.Chefrepo;
import com.example.demo.repo.UserRepo;

@Service
public class LoginService {
    @Autowired
    public UserRepo userRepo;

    @Autowired
    public Chefrepo chefrepo;
    
    public Users userSignIn(String userID,String password){

        
            Users newUser = new Users(userID,password);
            Users user = userRepo.save(newUser);
            return user;
       
    }
    public Chef chefSignIn(String chefID,String password){

      
            Chef newChef = new Chef(chefID,password);
            Chef chef = chefrepo.save(newChef);
            return chef;
        
    }
    public boolean isUser(String userID,String password){
        Users user = userRepo.findByUserID(userID);
        if(user !=null && user.getPassword().equals(password)){
            return true;
        }else{
            return false;
        }
    }
    public boolean ischef(String chefID,String password){
        Chef user = chefrepo.findByChefID(chefID);
        if(user !=null && user.getPassword().equals(password)){
            return true;
        }else{
            return false;
        }
    }
}
