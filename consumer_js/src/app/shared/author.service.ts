import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Book} from "./book";
import {environment} from "../../environments/environment";
import {Http} from "@angular/http";
import {Author} from "./author";

@Injectable()
export class AuthorService {

  constructor(private http: Http) { }

  public getAuthors(): Observable<Array<Author>> {
    return this.http.get(environment.libraryServiceUrl + '/author')
      .map(res => res.json());
  }

  delete(id: number) {
    return this.http.delete(environment.libraryServiceUrl + '/author/'+id)
      .map(res => res.json());
  }

  updateAuthor(author: Author) {
    return this.http.put(environment.libraryServiceUrl + '/author/'+author.id, author)
      .map(res => res.json());
  }

  createAuthor(author: Author){
    return this.http.post(environment.libraryServiceUrl + '/author/', author);
  }

  getAuthor(id: any) {
    return this.http.get(environment.libraryServiceUrl + '/author/'+id)
      .map(res => res.json());
  }
}
