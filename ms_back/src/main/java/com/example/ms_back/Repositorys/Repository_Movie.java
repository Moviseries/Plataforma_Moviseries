package com.example.ms_back.Repositorys;

import java.util.ArrayList;

import com.example.ms_back.Models.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repository_Movie extends CrudRepository<Movie, Long> {

    //Función para obtener las peliculas por genero
    public abstract ArrayList<Movie> findByGender(Long id);
}
