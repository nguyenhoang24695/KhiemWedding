package com.wedding.website.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping
public class PortfolioController {
    @RequestMapping(method = RequestMethod.GET, value = "portfolio")
    public String index() {
        return "portfolio";
    }
}
