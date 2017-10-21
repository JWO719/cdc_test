package de.jwo.library.controller;

import de.jwo.library.model.Book;
import de.jwo.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping(method = RequestMethod.GET, value = "/")
    public List<Book> getBooks(){
        return this.bookService.getAllBooks();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/")
    public ResponseEntity<Book> createBook(@RequestBody Book book) throws Exception {
        if(this.bookService.addBook(book)){
            return ResponseEntity.status(HttpStatus.CREATED).location(new URI("http://localhost:8080/book/"+book.getId())).body(book);
        }else {
            throw new Exception();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{bookId}")
    public Book getBook(@PathVariable long bookId){
        return bookService.findBookById(bookId);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{bookId}")
    public Book getBook(@PathVariable int bookId, @RequestBody Book book){
        bookService.update(bookId, book);
        return book;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{bookId}")
    public ResponseEntity<String> deleteBook(@PathVariable int bookId){
        bookService.deleteBook(bookId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
