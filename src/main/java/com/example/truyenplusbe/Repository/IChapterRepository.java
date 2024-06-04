package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Chapter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IChapterRepository extends CrudRepository<Chapter,Long> {
}
