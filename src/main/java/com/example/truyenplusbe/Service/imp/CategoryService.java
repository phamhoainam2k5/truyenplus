package com.example.truyenplusbe.Service.imp;

import com.example.truyenplusbe.Model.Category;
import com.example.truyenplusbe.Repository.ICategoryRepository;
import com.example.truyenplusbe.Service.ICategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class CategoryService implements ICategoryService {
@Autowired
private ICategoryRepository iCategoryRepository;


    @Override
    public Iterable<Category> findAll() {
        return iCategoryRepository.findAll();
    }

    @Override
    public Optional<Category> findById(Long id) {
        return iCategoryRepository.findById(id);
    }

    @Override
    public Category save(Category category) {
        return iCategoryRepository.save(category);
    }

    @Override
    public void remove(Long id) {
iCategoryRepository.deleteById(id);
    }
}
