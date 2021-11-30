package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Gender_Serie;
import com.example.ms_back.Services.Service_Gender_Serie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class Controller_Gender_Serie {

    @Autowired
    Service_Gender_Serie service_gender_serie;

    @PostMapping(path = "/gender_serie")
    public Gender_Serie createGender_Serie (@RequestBody Gender_Serie gender_serie){
        return service_gender_serie.addGender_Serie(gender_serie);
    }

    @GetMapping(path = "/gender_series")
    public ArrayList<Gender_Serie> getGender_Series(){
        return service_gender_serie.getAllGender_Serie();
    }

    @DeleteMapping(path = "/gender_serie/{id}")
    public String deleteGender_Serie(@PathVariable("id") Long id){
        return service_gender_serie.deleteGender_SerieById(id);
    }
}
