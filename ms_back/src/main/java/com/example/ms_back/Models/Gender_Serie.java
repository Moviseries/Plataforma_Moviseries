package com.example.ms_back.Models;

import javax.persistence.*;

@Entity
@Table(name = "gender_serie")
public class Gender_Serie {

    //atributos y anotaciones JPA para crearlos en la base de datos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_gen_ser;
    @Column(nullable = false, name = "id_gender")
    private Long idgender;
    @Column(nullable = false)
    private Long id_serie;

    //Getters and Setters
    public Long getId_gen_ser() {
        return id_gen_ser;
    }

    public void setId_gen_ser(Long id_gen_ser) {
        this.id_gen_ser = id_gen_ser;
    }

    public Long getId_genero() {
        return idgender;
    }

    public void setId_genero(Long id_genero) {
        this.idgender = id_genero;
    }

    public Long getId_serie() {
        return id_serie;
    }

    public void setId_serie(Long id_serie) {
        this.id_serie = id_serie;
    }
}
