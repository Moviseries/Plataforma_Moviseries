package com.example.ms_back.Services;

import com.example.ms_back.Models.Serie;
import com.example.ms_back.Repositorys.Repository_Serie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class Service_Serie {

    @Autowired
    Repository_Serie repository_serie;

    public Serie addSerie (Serie serie){
        return repository_serie.save(serie);
    }

    public Optional<Serie> getSerie(Long id){
        return repository_serie.findById(id);
    }

    public ArrayList<Serie> getAllSeries(){
        return (ArrayList<Serie>) repository_serie.findAll();
    }

    public String deleteSerieById(Long id){
        try{
            repository_serie.deleteById(id);
            return "Serie eliminada correctamente";
        }catch (Exception error){
            return "La serie no existe o no se pudo eliminar";
        }
    }

    //Función para obtener las peliculas por genero
    public ArrayList<Serie> getMovieByGender(Long id){
        return repository_serie.findByGender(id);
    }
}
