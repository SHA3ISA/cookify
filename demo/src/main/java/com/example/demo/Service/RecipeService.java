package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.modal.Recipie;
import com.example.demo.repo.RecipieRepo;

@Service
public class RecipeService {
    @Autowired
    public RecipieRepo recipieRepo;

    public Recipie addNewRecipe(Recipie recipie,String userID){
        recipie.setChefID(userID);
        return recipieRepo.save(recipie);
    }
    
    public List<Recipie> getAll(){
        return recipieRepo.findAll();
    }
    public Recipie findByID(long id){
        return findByID(id);
    }
}
