package com.example.demo.service;

import com.example.demo.model.Book;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class BookService {

    public List<Book> getAllBooks(){
        ParameterizedTypeReference<List<Book>> typeRef = new ParameterizedTypeReference<List<Book>>() {};
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List<Book>> responseEntity = restTemplate.exchange("http://localhost:8080/book", HttpMethod.GET, null, typeRef);
        List<Book> books = responseEntity.getBody();
        return books;
    }

}
