package com.example.demo.model;

public class Book {

    private final long id;
    private String title;
    private Author author;

    public Book(){
        id = 0;
    }

    public Book(long id, String title, Author author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public String toString(){
        return "{id: "+ id + ", title: "+title+ ", author: { id: "+author.getId()+", firstName: "+ author.getFirstName()+ ", lastName: "+ author.getLastName()+"}}";
    }
}