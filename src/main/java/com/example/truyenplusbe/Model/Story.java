package com.example.truyenplusbe.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity @Table(name = "stories")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Story {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private Integer storyId;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Column(name = "image", nullable = false, length = 255)
    private String image;

    @Lob @Column(name = "description")
    private String description;

    @Column(name = "author", length = 255)
    private String author;

    @Column(name = "create_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private LocalDateTime updatedAt;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, columnDefinition = "ENUM('Full', 'Updating') DEFAULT 'Updating'")
    private StoryStatus status = StoryStatus.Updating;

    @ManyToMany
    @JoinTable(name = "story_category", joinColumns = @JoinColumn(name = "story_id"), inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories = new HashSet<>();

    public enum StoryStatus {Full, Updating}
}
