package com.wedding.website.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping
public class GalleryController {
    @RequestMapping(method = RequestMethod.GET, value = "gallery")
    public String index() {
        return "gallery";
    }
}
