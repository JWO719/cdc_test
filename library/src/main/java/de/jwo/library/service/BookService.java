package de.jwo.library.service;

import de.jwo.library.model.Author;
import de.jwo.library.model.Book;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    private static List<Book> books = new ArrayList<>();
    private static List<Author> authors = new ArrayList<>();

    static {
        long i = 0;
        long j = 0;
        Author aut1 = new Author(i++, "Stephen", "King");
        Author aut2 = new Author(i++, "Simon", "Beckett");
        Author aut3 = new Author(i++, "Dan", "Brown");
        Author aut4 = new Author(i, "Douglas", "Adams");

        Book book1 = new Book(j++, "Es", aut1);
        Book book2 = new Book(j++, "Chemie des Todes", aut2);
        Book book3 = new Book(j++, "Per Anhalter durch die Galaxis", aut4);
        Book book4 = new Book(j++, "Illuminati", aut3);
        Book book5 = new Book(j++, "Sakrileg", aut3);
        Book book6 = new Book(j++, "Kalte Asche", aut2);
        Book book7 = new Book(j, "Das Restaurant am Ende des Universums", aut4);

        authors.add(aut1);
        authors.add(aut2);
        authors.add(aut3);
        authors.add(aut4);

        books.add(book1);
        books.add(book2);
        books.add(book3);
        books.add(book4);
        books.add(book5);
        books.add(book6);
        books.add(book7);
    }

    public static List<Book> getAllBooks(){
        return books;
    }

    public static List<Author> getAllAuthors(){
        return authors;
    }

    public static Book findBookById(long id){
        for(Book book: books){
            if(book.getId() == id){
                return book;
            }
        }
        return null;
    }

    public static Author findAuthorById(long id){
        for(Author author: authors){
            if(author.getId() == id){
                return author;
            }
        }
        return null;
    }

    public static boolean addBook(Book book) {
        return books.add(book);
    }

    public static boolean deleteBook(int id){
        for(Book book: books){
            if(book.getId() == id){
                books.remove(book);
                return true;
            }
        }
        return false;
    }

    public static boolean addAuthor(Author author) {
        return authors.add(author);
    }

    public static boolean deleteAuthor(Author author){
        return books.remove(author);
    }

    public static void update(int id, Book book){
        books.remove(id);
        books.add(id, book);
    }

}
