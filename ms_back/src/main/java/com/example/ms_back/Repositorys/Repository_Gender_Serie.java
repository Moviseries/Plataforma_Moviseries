package com.example.ms_back.Repositorys;

import com.example.ms_back.Models.Gender_Serie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface Repository_Gender_Serie extends CrudRepository<Gender_Serie, Long> {

    //Funcion para obtener los datos por gender
    public abstract ArrayList<Gender_Serie> findByIdgender(Long id_gender);
}
