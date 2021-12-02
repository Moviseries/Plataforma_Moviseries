package com.example.ms_back.Services;

import com.example.ms_back.Models.Gender_Serie;
import com.example.ms_back.Repositorys.Repository_Gender_Serie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Service_Gender_Serie {

    @Autowired
    Repository_Gender_Serie repository_gender_serie;

    public Gender_Serie addGender_Serie (Gender_Serie gender_serie){
        return repository_gender_serie.save(gender_serie);
    }

    public ArrayList<Gender_Serie> getAllGender_Serie(){
        return (ArrayList<Gender_Serie>) repository_gender_serie.findAll();
    }

    public String deleteGender_SerieById(Long id){
        try{
            repository_gender_serie.deleteById(id);
            return "Se eliminó el genero de la película correctamente";
        }catch (Exception error){
            return "No se encontro el genero de la película o no se puede eliminar";
        }
    }

    //Servicio para obtener los datos por gender
    public ArrayList<Gender_Serie> getGender_SerieByGender(Long id){
        return repository_gender_serie.findByIdgender(id);
    }
}
