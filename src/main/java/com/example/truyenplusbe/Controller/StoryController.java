package com.example.truyenplusbe.Controller;


import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Service.IStoryService;
import com.example.truyenplusbe.Service.imp.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@RestController
@RequestMapping("/api/stories")
public class StoryController {
    @Autowired
    private IStoryService storyService;


    private static final String UPLOAD_DIR = "uploads";

    @PostMapping("")
    public ResponseEntity<Story> createStory(
            @RequestParam("image") MultipartFile image,
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            @RequestParam("author") String author) {

        String imageName = saveImage(image);
        Story story = new Story();
        story.setTitle(title);
        story.setImage(imageName);
        story.setDescription(description);
        story.setAuthor(author);
        Story createdStory = storyService.save(story);

        return new ResponseEntity<>(createdStory, HttpStatus.CREATED);
    }

    private String saveImage(MultipartFile image) {
        try {
            byte[] bytes = image.getBytes();
            Path path = Paths.get(UPLOAD_DIR + File.separator + image.getOriginalFilename());
            Files.write(path, bytes);
            return image.getOriginalFilename();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }


    @GetMapping("")
    public ResponseEntity<Iterable<Story>> getAllStories() {
        Iterable<Story> stories = storyService.findAll();
        return new ResponseEntity<>(stories, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Story> getStoryById(@PathVariable Long id) {
        Optional<Story> story = storyService.findById(id);
        return story.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }


//    @PostMapping("")
//    public ResponseEntity<Story> createStory(@RequestBody Story story) {
//        Story createdStory = storyService.save(story);
//        return new ResponseEntity<>(createdStory, HttpStatus.CREATED);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Story> updateStory(@PathVariable Long id, @RequestBody Story story) {
        Optional<Story> existingStory = storyService.findById(id);
        if (existingStory.isPresent()) {
            story.setStoryId(id);
            Story updatedStory = storyService.save(story);
            return new ResponseEntity<>(updatedStory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStory(@PathVariable Long id) {
        Optional<Story> existingStory = storyService.findById(id);
        if (existingStory.isPresent()) {
            storyService.remove(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
