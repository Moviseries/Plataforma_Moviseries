package com.example.ms_back.Models;

import javax.persistence.*;

@Entity
@Table(name = "gender")
public class Gender {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_gender;
    @Column(nullable = false)
    private String name_gender;

    public Long getId_gender() {
        return id_gender;
    }

    public void setId_gender(Long id_gender) {
        this.id_gender = id_gender;
    }

    public String getName_gender() {
        return name_gender;
    }

    public void setName_gender(String name_gender) {
        this.name_gender = name_gender;
    }
}
