package com.example.truyenplusbe.Service.imp;

import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.IStoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoryService implements IStoryService {

    @Autowired
    private IStoryRepository storyRepository;

    public List<Story> searchByTitle(String title) {
        return storyRepository.findByTitleContainingIgnoreCase(title);
    }
    @Override
    public Iterable<Story> findAll() {
        return storyRepository.findAll();
    }

    @Override
    public Optional<Story> findById(Long id) {
        return storyRepository.findById(Math.toIntExact(id));
    }

    @Override
    public Story save(Story story) {
        return storyRepository.save(story);
    }

    @Override
    public void remove(Long id) {
storyRepository.deleteById(Math.toIntExact(id));
    }
}

