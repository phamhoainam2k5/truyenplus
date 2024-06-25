package com.example.truyenplusbe.Dto;

import com.example.truyenplusbe.Model.Category;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

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
