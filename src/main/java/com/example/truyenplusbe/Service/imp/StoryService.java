package com.example.truyenplusbe.Service.imp;

import com.example.truyenplusbe.Dto.StoryDTO;
import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.IStoryService;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.awt.print.Pageable;
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
        // Lấy thông tin đối tượng Story từ cơ sở dữ liệu
        Optional<Story> optionalStory = iStoryRepository.findById(storyId);

        // Kiểm tra xem có tồn tại đối tượng Story không
        if (optionalStory.isEmpty()) {
            // Xử lý nếu không tìm thấy đối tượng Story
            // Ví dụ: throw Exception hoặc trả về null
            // Ở đây, tôi sẽ throw một Exception
            throw new EntityNotFoundException("Story with id " + storyId + " not found");
        }

        // Lấy đối tượng Story từ Optional
        Story story = optionalStory.get();

        // Sao chép dữ liệu từ DTO mới vào đối tượng Story hiện có
        MultipartFile multipartFile = storyDTO.getImage();
        if (multipartFile != null && !multipartFile.isEmpty()) {
            // Nếu có ảnh mới, thực hiện sao chép và cập nhật tên file
            String fileName = multipartFile.getOriginalFilename();
            FileCopyUtils.copy(multipartFile.getBytes(), new File(fileUpload + fileName));
            story.setImage(fileName);
        }

        // Cập nhật các thông tin khác từ DTO
        story.setTitle(storyDTO.getTitle());
        story.setDescription(storyDTO.getDescription());
        story.setAuthor(storyDTO.getAuthor());
        story.setUpdatedAt(LocalDateTime.now());
     story.setStatus(storyDTO.getStatus());
        story.setCategories(storyDTO.getCategories());

        // Lưu và trả về đối tượng Story đã được cập nhật
        return iStoryRepository.save(story);
    }

    @Override
    public void remove(Long id) {
        iStoryRepository.deleteById(id);
    }
}

