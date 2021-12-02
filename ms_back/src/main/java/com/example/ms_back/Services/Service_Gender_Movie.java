package com.example.ms_back.Services;
import com.example.ms_back.Models.Gender_Movie;
import com.example.ms_back.Models.Movie;
import com.example.ms_back.Repositorys.Repository_Gender_Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Service_Gender_Movie {

    @Autowired
    Repository_Gender_Movie repository_gender_movie;

    public Gender_Movie addGender_Movie(Gender_Movie gender_movie){
        return repository_gender_movie.save(gender_movie);
    }

    public ArrayList<Gender_Movie> getAllGender_Movie(){
        return (ArrayList<Gender_Movie>) repository_gender_movie.findAll();
    }

    public String deleteGender_MovieById(Long id){
        try{
            repository_gender_movie.deleteById(id);
            return "Genero de la pelicula eliminado correctamente";
        }catch (Exception error){
            return "El genero de la película no existe o no se pudo eliminar";
        }
    }

    public ArrayList<Gender_Movie> findGender(Long id_gender){
        return repository_gender_movie.findByIdgender(id_gender);
    }

}
