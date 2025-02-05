package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Chef;

@Repository
public interface Chefrepo extends JpaRepository<Chef,Long>{
    Chef findByChefID(String chefID);
    
}
