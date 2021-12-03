package com.example.ms_back.Services;

import com.example.ms_back.Models.Movie;
import com.example.ms_back.Repositorys.Repository_Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class Service_Movie {

    @Autowired
    Repository_Movie repository_movie;

    public Movie addMovie (Movie movie){
        return repository_movie.save(movie);
    }

    public ArrayList<Movie> getAllMovies(){
        return (ArrayList<Movie>) repository_movie.findAll();
    }

    public String deleteMovieById(Long id){
        try{
            repository_movie.deleteById(id);
            return "Se ha eliminado la pelicula correctamente";
        }catch (Exception error){
            return "La pelicula no existe o no se pudo eliminar";
        }
    }

    //Función para obtener las peliculas por genero
    public ArrayList<Movie> getMovieByGender(Long id){
        return repository_movie.findByGender(id);
    }
}
