package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Movie;
import com.example.ms_back.Services.Service_Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

//Indicamos que es un controlador
@RestController
//Damos accerso al origen de React
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Controller_Movie {

    //Autoiniciamos un objeto
    @Autowired
    Service_Movie service_movie;

    //Creamos los endpoints consumiendo su respectivo servicio
    @PostMapping(path = "/movie")
    public Movie createMovie (@RequestBody Movie movie){
        return service_movie.addMovie(movie);
    }

    @GetMapping(path = "/movie/{id}")
    public Optional<Movie> getMovieById(@PathVariable("id") Long id){
        return service_movie.getMovie(id);
    }

    @GetMapping(path = "/movies")
    public ArrayList<Movie> getMovies(){
        return service_movie.getAllMovies();
    }

    @DeleteMapping(path = "/movie/{id}")
    public String deleteMovie(@PathVariable("id") Long id){
        return service_movie.deleteMovieById(id);
    }

    //Endpoint para obtener las peliculas por genero
    @GetMapping(path = "/movie/gender/{id}")
    public ArrayList<Movie> getMovieByGender(@PathVariable("id") Long id){
        return service_movie.getMovieByGender(id);
    }
}
