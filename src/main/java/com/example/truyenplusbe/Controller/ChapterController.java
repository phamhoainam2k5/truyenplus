package com.example.truyenplusbe.Controller;

import com.example.truyenplusbe.Dto.ChapDTO;
import com.example.truyenplusbe.Model.Chapter;
import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.IChapterRepository;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.imp.ChapTerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/chapters")
@CrossOrigin("*")
public class ChapterController {
    @Autowired
    private ChapTerService chapTerService;
    @Autowired
    private IChapterRepository iChapterRepository;
    @Autowired
    private IStoryRepository iStoryRepository;
    @GetMapping("/story/{storyId}")
    public ResponseEntity<Iterable<Chapter>> getAllChapByStoryId(@PathVariable Long storyId) {
        Iterable<Chapter> chapters = iChapterRepository.findByStoryIdOrderByCreatedAtDesc(storyId);
        if (chapters == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(chapters, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Chapter> deleteChapter(@PathVariable Long id) {
        Optional<Chapter> chapterOptional = chapTerService.findById(id);
        Chapter chapter = chapterOptional.get();
        Story story = chapter.getStory();
        System.out.println(story.getTotalChapters());
        story.setTotalChapters(story.getTotalChapters() - 1);
        System.out.println(story.getTotalChapters());

        iStoryRepository.save(story);
        System.out.println(story);

        chapTerService.remove(id);




        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{storyId}")
    public ResponseEntity<Chapter> createChap(@RequestBody ChapDTO chapDTO, @PathVariable Long storyId) throws IOException {
        Chapter createdChap = chapTerService.saveChap(chapDTO, storyId);
        return new ResponseEntity<>(createdChap, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Chapter> updateChapter(
            @PathVariable Long id,
            @RequestBody ChapDTO chapDTO) throws IOException {

            Chapter updatedChapter = chapTerService.updateChap(chapDTO, id);
            return ResponseEntity.ok(updatedChapter);

    }
    @GetMapping("/{id}")
    public ResponseEntity<Chapter> getChapById(@PathVariable Long id) {
        Optional<Chapter> chapter = chapTerService.findById(id);
        return new ResponseEntity<>(chapter.get(), HttpStatus.OK);

    }

}
