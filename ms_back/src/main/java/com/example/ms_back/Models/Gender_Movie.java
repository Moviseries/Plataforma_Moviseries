package com.example.ms_back.Models;

import javax.persistence.*;

@Entity
@Table(name = "gender_movie")
public class Gender_Movie {

    //atributos y anotaciones JPA para crearlos en la base de datos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_gen_mov;
    @Column(nullable = false, name = "id_gender")
    private Long idgender;
    @Column(nullable = false)
    private Long id_movie;

    //Getters and Setters
    public Long getId_gen_mov() {
        return id_gen_mov;
    }

    public void setId_gen_mov(Long id_gen_mov) {
        this.id_gen_mov = id_gen_mov;
    }

    public Long getId_gender() {
        return idgender;
    }

    public void setId_gender(Long id_gender) {
        this.idgender = id_gender;
    }

    public Long getId_movie() {
        return id_movie;
    }

    public void setId_movie(Long id_movie) {
        this.id_movie = id_movie;
    }
}
