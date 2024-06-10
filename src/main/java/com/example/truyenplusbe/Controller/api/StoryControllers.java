package com.example.truyenplusbe.Controller.api;

import com.example.truyenplusbe.Model.Story;
import com.example.truyenplusbe.Service.imp.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class StoryControllers {
    @Autowired
    private StoryService storyService;
    @GetMapping("/list")
    public ModelAndView show(){
        ModelAndView modelAndView=new ModelAndView("/list");
        List<Story> stories= (List<Story>) storyService.findAll();
        modelAndView.addObject("stories",stories);
return modelAndView;
    }
}
