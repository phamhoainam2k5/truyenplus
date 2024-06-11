package com.example.truyenplusbe.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Data @Entity @Table(name = "chapters") @AllArgsConstructor @NoArgsConstructor
public class Chapter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column(name = "chapter_id")
    private Long chapterId;

    @ManyToOne @JoinColumn(name = "story_id", nullable = false)
    private  Story story;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Lob @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "chapter_number", nullable = false)
    private Integer chapterNumber;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at") @LastModifiedDate
    private LocalDateTime updatedAt;
}