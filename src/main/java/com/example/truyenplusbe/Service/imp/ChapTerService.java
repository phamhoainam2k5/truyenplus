package com.example.truyenplusbe.Service.imp;


import com.example.truyenplusbe.Model.Chapter;
import com.example.truyenplusbe.Repository.IChapterRepository;
import com.example.truyenplusbe.Service.IChapterService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class ChapTerService implements IChapterService  {
@Autowired
private IChapterRepository iChapterRepository;

    @Override
    public Iterable<Chapter> findAll() {
        return iChapterRepository.findAll();
    }

    @Override
    public Optional<Chapter> findById(Long id) {
        return iChapterRepository.findById(id);
    }

    @Override
    public Chapter save(Chapter chapter) {
        return iChapterRepository.save(chapter);
    }

    @Override
    public void remove(Long id) {
iChapterRepository.deleteById(id);
    }
}
