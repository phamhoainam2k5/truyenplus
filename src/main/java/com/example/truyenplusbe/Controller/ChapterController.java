package com.example.truyenplusbe.Controller;

import com.example.truyenplusbe.Model.Chapter;
import com.example.truyenplusbe.Service.IChapterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/chapter")
@Validated
public class ChapterController {

    @Autowired
    private IChapterService chapterService;

    @GetMapping("")
    public ResponseEntity<Iterable<Chapter>> getAllChapter() {
        Iterable<Chapter> chapters = chapterService.findAll();
        return new ResponseEntity<>(chapters, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chapter> getChapterById(@PathVariable Long id) {
        Optional<Chapter> chapter = chapterService.findById(id);
        return chapter.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public ResponseEntity<?> createChapter( @RequestBody Chapter chapter) {
        try {
            Chapter createdChapter = chapterService.save(chapter);
            return new ResponseEntity<>(createdChapter, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error creating chapter: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateChapter(@PathVariable Long id,  @RequestBody Chapter chapter) {
        Optional<Chapter> existingChapter = chapterService.findById(id);
        if (existingChapter.isPresent()) {
            chapter.setChapterId(id);
            try {
                Chapter updatedChapter = chapterService.save(chapter);
                return new ResponseEntity<>(updatedChapter, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>("Error updating chapter: " + e.getMessage(), HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>("Chapter not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteChapter(@PathVariable Long id) {
        Optional<Chapter> existingChapter = chapterService.findById(id);
        if (existingChapter.isPresent()) {
            try {
                chapterService.remove(id);
                return new ResponseEntity<>(HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>("Error deleting chapter: " + e.getMessage(), HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>("Chapter not found", HttpStatus.NOT_FOUND);
        }
    }
}
