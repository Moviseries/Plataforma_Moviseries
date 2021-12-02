package com.example.ms_back.Models;

import javax.persistence.*;

@Entity
@Table(name = "serie")
public class Serie {

    //atributos y anotaciones JPA para crearlos en la base de datos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_serie;
    @Column(nullable = false)
    private String name_serie;
    @Column(nullable = false)
    private String fecha_serie;
    @Column(nullable = false)
    private String url_imagen_serie;
    @Column(nullable = false)
    private String plataforma;

    //Getters and Setters
    public Long getId_serie() {
        return id_serie;
    }

    public void setId_serie(Long id_serie) {
        this.id_serie = id_serie;
    }

    public String getName_serie() {
        return name_serie;
    }

    public void setName_serie(String name_serie) {
        this.name_serie = name_serie;
    }

    public String getFecha_serie() {
        return fecha_serie;
    }

    public void setFecha_serie(String fecha_serie) {
        this.fecha_serie = fecha_serie;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }

    public String getUrl_imagen_serie() {
        return url_imagen_serie;
    }

    public void setUrl_imagen_serie(String url_imagen_serie) {
        this.url_imagen_serie = url_imagen_serie;
    }
}
