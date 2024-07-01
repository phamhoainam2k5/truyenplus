package com.example.truyenplusbe.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Data @Entity @Table(name = "stories") @AllArgsConstructor @NoArgsConstructor
public class Story {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "story_id")
    private Long storyId;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Column(name = "image", nullable = false, length = 255)
    private String image;

    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

    @Column(name = "author", length = 255)
    private String author;

    @CreatedDate @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at") @LastModifiedDate
    private LocalDateTime updatedAt;


    @Column(name = "status")
    private String status;

    @ManyToMany
    @JoinTable(
            name = "story_category",
            joinColumns = @JoinColumn(name = "story_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories = new HashSet<>();

    @Value("0")
    private int totalChapters;
}