package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Serie;
import com.example.ms_back.Services.Service_Serie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

//Indicamos que es un controlador
@RestController
//Damos accerso al origen de React
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Controller_Serie {

    //Autoiniciamos un objeto
    @Autowired
    Service_Serie service_serie;

    //Creamos los endpoints consumiendo su respectivo servicio
    @PostMapping(path = "/serie")
    public Serie createSerie (@RequestBody Serie serie){
        return service_serie.addSerie(serie);
    }

    @GetMapping(path = "/serie/{id}")
    public Optional<Serie> getMovieById(@PathVariable("id") Long id){
        return service_serie.getSerie(id);
    }

    @GetMapping(path = "/series")
    public ArrayList<Serie> getSeries (){
        return service_serie.getAllSeries();
    }

    @DeleteMapping(path = "serie/{id}")
    public String deleteSerie(@PathVariable("id") Long id){
        return service_serie.deleteSerieById(id);
    }

    //Endpoint para obtener las peliculas por genero
    @GetMapping(path = "/serie/gender/{id}")
    public ArrayList<Serie> getMovieByGender(@PathVariable("id") Long id){
        return service_serie.getMovieByGender(id);
    }
}
