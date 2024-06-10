package com.example.truyenplusbe.Controller;


import com.example.truyenplusbe.Dto.StoryDTO;
import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.IStoryService;
import com.example.truyenplusbe.Service.imp.StoryService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin("*")
public class StoryController {
    @Autowired
    private StoryService storyService;
@Autowired
private IStoryRepository iStoryRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Story>> getAllStories() {
        Iterable<Story> stories = iStoryRepository.findByCreatedAtOrderBy();
        return new ResponseEntity<>(stories, HttpStatus.OK);
    }
    @GetMapping("/status")
    public ResponseEntity<Iterable<Story>> getStories() {
        Iterable<Story> stories = iStoryRepository.findByStatus();
        return new ResponseEntity<>(stories, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Story> getStoryById(@PathVariable Long id) {
       Optional<Story> story = storyService.findById(id);
        return new ResponseEntity<>(story.get(), HttpStatus.OK);

    }


    @PostMapping("")
    public ResponseEntity<Story> createStory(@ModelAttribute StoryDTO storyDTO) throws IOException {
        Story createdStory = storyService.saveStory(storyDTO);
        return new ResponseEntity<>(createdStory, HttpStatus.CREATED);
    }

    @PutMapping("/{storyId}")
    public ResponseEntity<Story> updateStory(
            @PathVariable Long storyId,
            @ModelAttribute StoryDTO storyDTO) throws IOException {

            Story updatedStory = storyService.updateStory(storyId, storyDTO);
            return ResponseEntity.ok(updatedStory);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Story> deleteStory(@PathVariable Long id) {
        Optional<Story> storyOptional = storyService.findById(id);
        if (!storyOptional.isPresent()) {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }

        storyService.remove(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @GetMapping("/chap/{storyId}")
    public ResponseEntity<Integer> hasChapter(@PathVariable Long storyId) {
        int hasChapters = iStoryRepository.countStoriesWithChapters(storyId);
        return ResponseEntity.ok(hasChapters);
    }
}
