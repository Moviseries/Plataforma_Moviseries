package com.example.ms_back.Models;

import javax.persistence.*;

@Entity
@Table(name = "gender_serie")
public class Gender_Serie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_gen_ser;
    @Column(nullable = false)
    private Long id_genero;
    @Column(nullable = false)
    private Long id_serie;

    public Long getId_gen_ser() {
        return id_gen_ser;
    }

    public void setId_gen_ser(Long id_gen_ser) {
        this.id_gen_ser = id_gen_ser;
    }

    public Long getId_genero() {
        return id_genero;
    }

    public void setId_genero(Long id_genero) {
        this.id_genero = id_genero;
    }

    public Long getId_serie() {
        return id_serie;
    }

    public void setId_serie(Long id_serie) {
        this.id_serie = id_serie;
    }
}
