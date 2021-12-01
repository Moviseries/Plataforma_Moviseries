package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Gender_Movie;
import com.example.ms_back.Services.Service_Gender_Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class Controller_Gender_Movie {

    @Autowired
    Service_Gender_Movie service_gender_movie;

    @PostMapping(path = "/gender_movie")
    public Gender_Movie createGender_Movie(@RequestBody Gender_Movie gender_movie){
        return service_gender_movie.addGender_Movie(gender_movie);
    }

    @GetMapping(path = "/gender_movies")
    public ArrayList<Gender_Movie> getGender_Movies(){
        return service_gender_movie.getAllGender_Movie();
    }

    @DeleteMapping(path = "/gender_movie/{id}")
    public String deleteGender_Movie (@PathVariable("id") Long id){
        return service_gender_movie.deleteGender_MovieById(id);
    }
}