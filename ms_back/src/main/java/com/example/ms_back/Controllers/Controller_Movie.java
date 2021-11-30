package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Movie;
import com.example.ms_back.Services.Service_Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class Controller_Movie {

    @Autowired
    Service_Movie service_movie;

    @PostMapping(path = "/movie")
    public Movie createMovie (@RequestBody Movie movie){
        return service_movie.addMovie(movie);
    }

    @GetMapping(path = "/movies")
    public ArrayList<Movie> getMovies(){
        return service_movie.getAllMovies();
    }

    @DeleteMapping(path = "/movie/{id}")
    public String deleteMovie(@PathVariable("id") Long id){
        return service_movie.deleteMovieById(id);
    }
}
