package com.example.ms_back.Controllers;

import com.example.ms_back.Models.Gender;
import com.example.ms_back.Services.Service_Gender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
public class Controller_Gender {

    @Autowired
    Service_Gender service_gender;

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
