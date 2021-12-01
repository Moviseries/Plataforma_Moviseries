package com.example.ms_back.Controllers;

import com.example.ms_back.Models.User;
import com.example.ms_back.Services.Service_User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

//Indicamos que es un controlador
@RestController
//Damos accerso al origen de React
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class Controller_User {

    //Auto iniciamos un objeto
    @Autowired
    Service_User service_user;

    //Creamos los endpoints consumiendo su respectivo servicio
    @PostMapping(path = "/user")
    public User createUser (@RequestBody User user){
        return service_user.addUser(user);
    }

    @GetMapping(path = "/users")
    public ArrayList<User> getUser(){
        return service_user.getAllUsers();
    }

    @DeleteMapping(path = "/user/{id}")
    public String deleteUser (@PathVariable("id") Long id){
        return service_user.deleteUser(id);
    }

}
