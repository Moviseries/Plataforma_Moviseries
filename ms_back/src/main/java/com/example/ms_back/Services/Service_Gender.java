package com.example.ms_back.Services;

import com.example.ms_back.Models.Gender;
import com.example.ms_back.Repositorys.Repository_Gender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Service_Gender {

    @Autowired
    Repository_Gender repository_gender;

    public Gender addGender (Gender gender){
        return repository_gender.save(gender);
    }

    public ArrayList<Gender> getAllGender (){
        return (ArrayList<Gender>) repository_gender.findAll();
    }

    public String deleteGenderById(Long id){
        try{
            repository_gender.deleteById(id);
            return "Se ha eliminado el genero correctamente";
        }catch (Exception error){
            return "El genero no existe o no se puso eliminar";
        }
    }
}
