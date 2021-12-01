package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Gender;
import com.example.ms_back.Services.Service_Gender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

//Indicamos que es un controlador
@RestController
//Damos accerso al origen de React
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Controller_Gender {

    //Autoiniciamos un objeto
    @Autowired
    Service_Gender service_gender;

    //Creamos los endpoints consumiendo su respectivo servicio
    @PostMapping(path = "/gender")
    public Gender createGender (@RequestBody Gender gender){
        return service_gender.addGender(gender);
    }

    @GetMapping(path = "/genders")
    public ArrayList<Gender> getGenders(){
        return service_gender.getAllGender();
    }

    @DeleteMapping(path = "/gender/{id}")
    public String deleteGender(@PathVariable("id") Long id){
        return service_gender.deleteGenderById(id);
    }
}
