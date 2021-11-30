package com.example.ms_back.Services;

import com.example.ms_back.Models.User;
import com.example.ms_back.Repositorys.Repository_User;
import org.hibernate.annotations.NotFound;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Service_User {

    @Autowired
    Repository_User repository_user;

    public User addUser (User user){
        return repository_user.save(user);
    }

    public ArrayList<User> getAllUsers(){
        return (ArrayList<User>) repository_user.findAll();
    }

    public String deleteUser(Long id){
        try{
            repository_user.deleteById(id);
            return "Se elimido correctamente el usuario: "+id;
        }catch (Exception error){
            return "El usuario no existe o no es posible eliminar";
        }
    }
}
