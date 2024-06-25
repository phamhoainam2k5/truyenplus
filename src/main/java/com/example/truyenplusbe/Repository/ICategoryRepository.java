package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Long> {
    Category findByCategoryName(String categoryName);
}
