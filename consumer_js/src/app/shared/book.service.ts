import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Book} from "./book";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  public getBooks(): Observable<Array<Book>> {
    return this.http.get(environment.libraryServiceUrl + '/book')
      .map(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(environment.libraryServiceUrl + '/book/'+id)
      .map(res => res.json());
  }

  updateBook(book: Book) {
    return this.http.put(environment.libraryServiceUrl + '/book/'+book.id, book)
      .map(res => res.json());
  }

  createBook(book: Book){
    return this.http.post(environment.libraryServiceUrl + '/book/', book);
  }

  getBook(id: number) {
    return this.http.get(environment.libraryServiceUrl + '/book/'+id)
      .map(res => res.json());
  }
}
