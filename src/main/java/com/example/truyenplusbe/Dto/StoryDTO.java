package com.example.truyenplusbe.Dto;

import com.example.truyenplusbe.Model.Category;
import com.example.truyenplusbe.Model.Story;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data
public class StoryDTO {

  private String title;

    private MultipartFile image;


    private String description;


    private String author;



    private String status ;


    private Set<Category> categories = new HashSet<>();

}
