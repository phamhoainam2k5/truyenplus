package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Story;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStoryRepository extends CrudRepository<Story,Long> {
}
