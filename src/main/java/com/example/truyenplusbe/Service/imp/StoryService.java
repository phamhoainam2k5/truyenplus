package com.example.truyenplusbe.Service.imp;

import com.example.truyenplusbe.Dto.StoryDTO;
import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.IStoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class StoryService implements IStoryService {
    @Value("${file-upload}")
    private String fileUpload;

    @Autowired
    private IStoryRepository iStoryRepository;


    @Override
    public Iterable<Story> findAll() {
        return iStoryRepository.findAll();
    }

    @Override
    public Optional<Story> findById(Long id) {
        return iStoryRepository.findById(id);
    }

    @Override
    public Story save(Story story) {
        return iStoryRepository.save(story);
    }

    public Story saveStory(StoryDTO storyDTO) throws IOException {

        MultipartFile multipartFile = storyDTO.getImage();
        String fileName = multipartFile.getOriginalFilename();
        FileCopyUtils.copy(storyDTO.getImage().getBytes(), new File(fileUpload + fileName));

        LocalDateTime localDateTime = LocalDateTime.now();
        Story story = new Story(
                null,
                storyDTO.getTitle(),
                fileName,

                storyDTO.getDescription(),
                storyDTO.getAuthor(),
                localDateTime,
                localDateTime,

               "New",

                storyDTO.getCategories(),
                0
        );
        return iStoryRepository.save(story);
    }
    public Story updateStory(Long storyId, StoryDTO storyDTO) throws IOException {
        Optional<Story> optionalStory = iStoryRepository.findById(storyId);



        Story story = optionalStory.get();

        MultipartFile multipartFile = storyDTO.getImage();
        if (multipartFile != null && !multipartFile.isEmpty()) {
            String fileName = multipartFile.getOriginalFilename();
            FileCopyUtils.copy(multipartFile.getBytes(), new File(fileUpload + fileName));
            story.setImage(fileName);
        }

        story.setTitle(storyDTO.getTitle());
        story.setDescription(storyDTO.getDescription());
        story.setAuthor(storyDTO.getAuthor());
        story.setUpdatedAt(LocalDateTime.now());
     story.setStatus(storyDTO.getStatus());
        story.setCategories(storyDTO.getCategories());

        return iStoryRepository.save(story);
    }

    @Override
    public void remove(Long id) {
        iStoryRepository.deleteById(id);
    }
}

