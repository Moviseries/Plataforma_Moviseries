package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Serie;
import com.example.ms_back.Services.Service_Serie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Controller_Serie {

    @Autowired
    Service_Serie service_serie;

    @PostMapping(path = "/serie")
    public Serie createSerie (@RequestBody Serie serie){
        return service_serie.addSerie(serie);
    }

    @GetMapping(path = "/series")
    public ArrayList<Serie> getSeries (){
        return service_serie.getAllSeries();
    }

    @DeleteMapping(path = "serie/{id}")
    public String deleteSerie(@PathVariable("id") Long id){
        return service_serie.deleteSerieById(id);
    }
}
