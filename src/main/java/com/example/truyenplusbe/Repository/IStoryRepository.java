package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IStoryRepository  extends JpaRepository<Story, Long> {
    @Query(value = "SELECT * FROM storys ORDER BY created_at DESC", nativeQuery = true)
    public Iterable<Story>findByCreatedAtOrderBy();

    @Query(value = "SELECT * FROM storys WHERE status=\"Full\"", nativeQuery = true)
    public Iterable<Story>findByStatus();

    @Query(value = "SELECT COUNT(*) FROM storys WHERE story_id = :storyId AND total_chapters > 0", nativeQuery = true)
    int countStoriesWithChapters( Long storyId);

    List<Story> findByCategories_CategoryId(Long categoryId);
}
