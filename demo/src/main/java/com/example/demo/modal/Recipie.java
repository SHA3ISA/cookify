package com.example.demo.modal;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Recipie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long RecipieID;
   
    // private byte[] imgaeBytes;
    private String chefID;
    private String ingredients;
    private String instructions;
    private String name;
}
