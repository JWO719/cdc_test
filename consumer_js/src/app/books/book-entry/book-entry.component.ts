import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../shared/book.service";
import {Observable} from "rxjs/Observable";
import {Book} from "../../shared/book";

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  private book$: Observable<Book>;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.book$ = this.bookService.getBook(data.id);
    })
  }

}
