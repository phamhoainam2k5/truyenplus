package com.example.truyenplusbe.Repository;

import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Service.IStoryService;
import com.example.truyenplusbe.Service.imp.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.Optional;

@Repository
public interface IStoryRepository  extends CrudRepository<Story, Long> {

}
