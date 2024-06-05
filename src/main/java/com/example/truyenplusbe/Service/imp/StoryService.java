package com.example.truyenplusbe.Service.imp;

import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.IStoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StoryService implements IStoryService {

    @Autowired
    private IStoryRepository storyRepository;

    @Override
    public Iterable<Story> findAll() {
        return storyRepository.findAll();
    }

    @Override
    public Optional<Story> findById(Long id) {
        return storyRepository.findById(id);
    }

    @Override
    public Story save(Story story) {
        return storyRepository.save(story);
    }

    @Override
    public void remove(Long id) {
storyRepository.deleteById(id);
    }
}

