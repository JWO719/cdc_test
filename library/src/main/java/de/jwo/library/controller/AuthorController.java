package de.jwo.library.controller;

import de.jwo.library.model.Author;
import de.jwo.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/author")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorController {


    @Autowired
    private BookService bookService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Author> getAuthors(){
        return this.bookService.getAllAuthors();
    }

    @RequestMapping(method = RequestMethod.POST, value = "")
    public ResponseEntity<Author> createAuthor(@RequestBody Author author) throws Exception {
        if(this.bookService.addAuthor(author)){
            return ResponseEntity.status(HttpStatus.CREATED)
                    .header("Access-Control-Allow-Headers","Location")
                    .header("Access-Control-Expose-Headers", "Location")
                    .location(new URI("http://localhost:8080/author/"+author.getId())).body(author);
        }else {
            throw new Exception();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{authorId}")
    public Author getAuthor(@PathVariable long authorId){
        return bookService.findAuthorById(authorId);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{authorId}")
    public Author getBook(@PathVariable int authorId, @RequestBody Author author){
        bookService.updateAuthor(authorId, author);
        return author;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{authorId}")
    public ResponseEntity<String> deleteBook(@PathVariable int authorId){
        bookService.deleteAuthor(authorId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
