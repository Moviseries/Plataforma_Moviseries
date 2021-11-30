package com.example.ms_back.Repositorys;

import com.example.ms_back.Models.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repository_Movie extends CrudRepository<Movie, Long> {
}
