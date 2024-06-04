package com.example.truyenplusbe.Model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "storys")
public class Story {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private Integer storyId;

    @Column(name = "title", nullable = false, length = 255)
    private String title;
    @Column(name = "image", nullable = false, length = 255)
    private String image;

    @Lob
    @Column(name = "description")
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
    @JoinTable(
            name = "story_category",
            joinColumns = @JoinColumn(name = "story_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories = new HashSet<>();

    public Story() {

    }

    public enum StoryStatus {
        Full,
        Updating
    }

    public Integer getStoryId() {
        return storyId;
    }

    public void setStoryId(Long storyId) {
        this.storyId = Math.toIntExact(storyId);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDateTime getCreateAt() {
        return createAt;
    }

    public void setCreateAt(LocalDateTime createAt) {
        this.createAt = createAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public StoryStatus getStatus() {
        return status;
    }

    public void setStatus(StoryStatus status) {
        this.status = status;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public Story(Integer storyId, String title, String image, String description, String author, LocalDateTime createAt, LocalDateTime updatedAt, StoryStatus status, Set<Category> categories) {
        this.storyId = storyId;
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.createAt = createAt;
        this.updatedAt = updatedAt;
        this.status = status;
        this.categories = categories;
    }
}