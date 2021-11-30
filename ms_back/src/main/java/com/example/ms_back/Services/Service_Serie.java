package com.example.ms_back.Services;

import com.example.ms_back.Models.Serie;
import com.example.ms_back.Repositorys.Repository_Serie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Service_Serie {

    @Autowired
    Repository_Serie repository_serie;

    public Serie addSerie (Serie serie){
        return repository_serie.save(serie);
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
}
