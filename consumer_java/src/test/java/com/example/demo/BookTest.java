package com.example.demo;


import com.example.demo.model.Book;
import com.example.demo.service.BookService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.contract.stubrunner.spring.AutoConfigureStubRunner;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureStubRunner(
        ids = {"de.jwo:library:+:stubs:8080"},
        workOffline = true
)
public class BookTest {

    @Autowired
    BookService bookService;

    @Test
    public void shouldReturnAllBooks(){
        List<Book> actual = bookService.getAllBooks();

        assertThat(actual).isNotNull();
        assertThat(actual.get(0).getId()).isEqualTo(0);
    }


}
