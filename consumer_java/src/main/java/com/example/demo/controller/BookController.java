package com.example.demo.controller;


import com.example.demo.model.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Controller
public class BookController {

    @Autowired
    BookService bookService;

    @RequestMapping("/book")
    public String showBooks(@RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        List<Book> books = bookService.getAllBooks();
        model.addAttribute("books", books);
        return "book";
    }

    @RequestMapping("/book/{id}")
    public String showBook(@PathVariable long id, @RequestParam(value="name", required=false, defaultValue="World") String name, Model model) {
        RestTemplate restTemplate = new RestTemplate();
        Book book = restTemplate.getForObject("http://localhost:8080/book/"+id, Book.class);
        model.addAttribute("book", book);
        return "book.show";
    }
}
