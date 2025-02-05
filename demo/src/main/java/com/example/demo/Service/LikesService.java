package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.modal.Like;
import com.example.demo.repo.LikeRepo;

@Service
public class LikesService {

    @Autowired
    public LikeRepo likeRepo;

    public Like addLike(String userID,long RecipieID){
        return likeRepo.save(new Like(userID,RecipieID));
    }
    @Transactional
    public void removeLike(String userID,long RecipieID){
        likeRepo.deleteByUserID(userID);
    }
    public long getLikes(Long RecipieID){
        
return 5L;
    }

}
