package com.example.truyenplusbe.Controller;


import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Service.IStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Controller
@RequestMapping("/stories")
public class test {

    private static final String UPLOAD_DIR = "C:\\Users\\Admin\\Desktop\\du-an2\\truyenplus\\truyenplus-be\\src\\main\\resources\\static\\image\\";

    @Autowired
    private IStoryService storyService;

    @GetMapping
    public String listStories(Model model) {
        Iterable<Story> stories = storyService.findAll();
        model.addAttribute("stories", stories);
        return "story/list";  // Trả về view template story/list.html
    }

    @GetMapping("/view/{id}")
    public String viewStory(@PathVariable("id") Long id, Model model) {
        Optional<Story> story = storyService.findById(id);
        if (story.isPresent()) {
            model.addAttribute("story", story.get());
            return "story/view";  // Trả về view template story/view.html
        } else {
            return "redirect:/stories";
        }
    }

    @GetMapping("/create")
    public String createStoryForm(Model model) {
        model.addAttribute("story", new Story());
        return "story/create";  // Trả về view template story/create.html
    }

    @PostMapping("/create")
    public String createStory(@ModelAttribute Story story, @RequestParam("imageFile") MultipartFile imageFile) {
        try {
            String imageFileName = saveImage(imageFile);
            story.setImage(imageFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        storyService.save(story);
        return "redirect:/stories";
    }

    @GetMapping("/edit/{id}")
    public String editStoryForm(@PathVariable("id") Long id, Model model) {
        Optional<Story> story = storyService.findById(id);
        if (story.isPresent()) {
            model.addAttribute("story", story.get());
            return "story/edit";  // Trả về view template story/edit.html
        } else {
            return "redirect:/stories";
        }
    }

    @PostMapping("/edit/{id}")
    public String updateStory(@PathVariable("id") Long id, @ModelAttribute Story story, @RequestParam("imageFile") MultipartFile imageFile) {
        try {
            String imageFileName = saveImage(imageFile);
            story.setImage(imageFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        story.setStoryId(id);  // Đảm bảo rằng ID không bị thay đổi
        storyService.save(story);
        return "redirect:/stories";
    }

    @GetMapping("/delete/{id}")
    public String deleteStory(@PathVariable("id") Long id) {
        storyService.remove(id);
        return "redirect:/stories";
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
