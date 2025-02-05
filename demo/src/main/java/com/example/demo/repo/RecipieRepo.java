package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Recipie;

@Repository
public interface RecipieRepo extends JpaRepository<Recipie,Long>{
    
}
