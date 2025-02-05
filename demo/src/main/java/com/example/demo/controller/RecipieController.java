package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.LikesService;
import com.example.demo.Service.RecipeService;
import com.example.demo.modal.Recipie;

@Controller
@RestController
@RequestMapping("api/v1/{userID}")
@CrossOrigin
public class RecipieController {


    @Autowired
    public RecipeService recipeService;

    @Autowired
    public LikesService likesService;


    @PostMapping("/recipe")
    public ResponseEntity<Recipie> addRecipie(@RequestBody Recipie recipie,@PathVariable String userID){
        Recipie recipie2 = recipeService.addNewRecipe(recipie,userID);
        return new ResponseEntity<>(recipie2,HttpStatus.CREATED);
    }

    @GetMapping("/recipe")
    public ResponseEntity<List<Recipie>> getAll(){
        List<Recipie> recipies = recipeService.getAll();
        return new ResponseEntity<>(recipies,HttpStatus.OK);
    }
    @GetMapping("/recipe/{RecipieID}")
    public ResponseEntity<Recipie> getByID(@PathVariable long RecipieID){
        Recipie recipie = recipeService.findByID(RecipieID);
        if(recipie!=null)
        return new ResponseEntity<>(recipie,HttpStatus.OK);
        return new ResponseEntity<>(HttpStatusCode.valueOf(404));
    }

    @PostMapping("/recipe/{RecipieID}/like")
    public ResponseEntity<HttpStatus> addlike(@PathVariable String userID,@PathVariable long RecipieID){
        likesService.addLike(userID, RecipieID);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/recipe/{RecipieID}/like")
    public ResponseEntity<HttpStatus> removelike(@PathVariable String userID,@PathVariable long RecipieID){
        likesService.removeLike(userID, RecipieID);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    
}
