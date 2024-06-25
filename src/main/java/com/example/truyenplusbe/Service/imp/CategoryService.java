package com.example.truyenplusbe.Service.imp;

import com.example.truyenplusbe.Model.Category;
import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Repository.ICategoryRepository;
import com.example.truyenplusbe.Repository.IStoryRepository;
import com.example.truyenplusbe.Service.ICategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {
@Autowired
private ICategoryRepository iCategoryRepository;

    @Autowired
    private IStoryRepository storyRepository;
    
    public List<Story> findStoriesByCategoryName(String categoryName) {
        Category category = iCategoryRepository.findByCategoryName(categoryName);
        if (category != null) {
            return storyRepository.findByCategories_CategoryId(category.getCategoryId());
        }
        return null;
    }

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