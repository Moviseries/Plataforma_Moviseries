package com.example.ms_back.Repositorys;

import com.example.ms_back.Models.Gender_Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface Repository_Gender_Movie extends CrudRepository<Gender_Movie, Long> {

    public abstract ArrayList<Gender_Movie> findByIdgender(Long id_gender);

}
