package com.example.ms_back.Repositorys;

import com.example.ms_back.Models.Gender;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repository_Gender extends CrudRepository<Gender, Long> {
}
