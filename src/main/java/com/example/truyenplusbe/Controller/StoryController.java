package com.example.truyenplusbe.Controller;

import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Service.IStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@RestController
@RequestMapping("/api/stories")
public class StoryController {

    private static final String UPLOAD_DIR = "C:\\Users\\Admin\\Desktop\\du-an2\\truyenplus\\truyenplus-be\\src\\main\\resources\\static\\image\\";

    @Autowired
    private IStoryService storyService;

    @GetMapping
    public ResponseEntity<Iterable<Story>> listStories() {
        Iterable<Story> stories = storyService.findAll();
        return ResponseEntity.ok(stories);
    }

    @GetMapping("/view/{id}")
    public ResponseEntity<Story> viewStory(@PathVariable("id") Long id) {
        Optional<Story> story = storyService.findById(id);
        return story.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/create")
    public ResponseEntity<Story> createStory(@ModelAttribute Story story, @RequestParam("imageFile") MultipartFile imageFile) {
        try {
            String imageFileName = saveImage(imageFile);
            story.setImage(imageFileName);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        storyService.save(story);
        return ResponseEntity.status(HttpStatus.CREATED).body(story);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Story> updateStory(@PathVariable("id") Long id, @ModelAttribute Story story, @RequestParam("imageFile") MultipartFile imageFile) {
        try {
            String imageFileName = saveImage(imageFile);
            story.setImage(imageFileName);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        story.setStoryId(id);
        storyService.save(story);
        return ResponseEntity.ok(story);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteStory(@PathVariable("id") Long id) {
        storyService.remove(id);
        return ResponseEntity.noContent().build();
    }

    private String saveImage(MultipartFile imageFile) throws IOException {
        if (!imageFile.isEmpty()) {
            String fileName = imageFile.getOriginalFilename();
            Path path = Paths.get(UPLOAD_DIR + fileName);
            Files.write(path, imageFile.getBytes());
            return fileName;
        }
        return null;
    }
}
