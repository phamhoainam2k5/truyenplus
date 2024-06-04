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

    @Override
    public void remove(Long id) {
iStoryRepository.deleteById(id);
    }
}
