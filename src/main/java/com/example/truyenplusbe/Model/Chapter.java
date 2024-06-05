package com.example.truyenplusbe.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity @Table(name = "chapters")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Chapter {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chapter_id")
    private Integer chapterId;

    @ManyToOne @JoinColumn(name = "story_id", nullable = false)
    private  Story story;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Lob @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "chapter_number", nullable = false)
    private Integer chapterNumber;

    @Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private LocalDateTime updatedAt;
}