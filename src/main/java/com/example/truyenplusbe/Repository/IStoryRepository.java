package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;

@Repository
public interface IStoryRepository extends JpaRepository<Story, Integer> {
    List<Story> findByTitleContainingIgnoreCase(String title);

}