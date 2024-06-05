package com.example.truyenplusbe.Model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "chapters")
public class Chapter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chapter_id")
    private long chapterId;

    @ManyToOne
    @JoinColumn(name = "story_id", nullable = false)
    private  Story story;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Lob
    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "chapter_number", nullable = false)
    private long chapterNumber;

    @Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(name = "updated_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private LocalDateTime updatedAt;

    public Chapter(Story story) {
        this.story = story;
    }

    public long getChapterId() {
        return chapterId;
    }

    public void setChapterId(long chapterId) {
        this.chapterId = chapterId;
    }

    public Story getStory() {
        return story;
    }

    public void setStory(Story story) {
        this.story = story;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public long getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(long chapterNumber) {
        this.chapterNumber = chapterNumber;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Chapter() {

    }

    public Chapter(long chapterId, Story story, String title, String content, long chapterNumber, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.chapterId = chapterId;
        this.story = story;
        this.title = title;
        this.content = content;
        this.chapterNumber = chapterNumber;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}