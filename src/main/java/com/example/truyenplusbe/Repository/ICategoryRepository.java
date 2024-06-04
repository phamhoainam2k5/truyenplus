package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ICategoryRepository extends CrudRepository<Category,Long> {
}
