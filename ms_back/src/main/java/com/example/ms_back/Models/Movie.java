package com.example.ms_back.Models;

import javax.persistence.*;

@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_movie;
    @Column(nullable = false)
    private String name_movie;
    @Column(nullable = false)
    private String fecha_movie;
    @Column(nullable = false)
    private String cine;

    public Long getId_movie() {
        return id_movie;
    }

    public void setId_movie(Long id_movie) {
        this.id_movie = id_movie;
    }

    public String getName_movie() {
        return name_movie;
    }

    public void setName_movie(String name_movie) {
        this.name_movie = name_movie;
    }

    public String getFecha_movie() {
        return fecha_movie;
    }

    public void setFecha_movie(String fecha_movie) {
        this.fecha_movie = fecha_movie;
    }

    public String getCine() {
        return cine;
    }

    public void setCine(String cine) {
        this.cine = cine;
    }
}
