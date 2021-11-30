package com.example.ms_back.Repositorys;

import com.example.ms_back.Models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repository_User extends CrudRepository<User, Long> {
}
