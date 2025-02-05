package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.modal.Like;

@Repository
public interface LikeRepo extends JpaRepository<Like,Long>{
    void deleteByUserID(String userID);

    // @Query("SELECT COUNT(e) FROM Recipie e  WHERE e.recipieID = :recipieID")
    // Long getNumberOfLikes(@Param("recipieID") Long recipieID);
}
