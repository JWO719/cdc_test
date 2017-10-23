import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Author} from "../../shared/author";
import {ActivatedRoute} from "@angular/router";
import {AuthorService} from "../../shared/author.service";

@Component({
  selector: 'app-author-entry',
  templateUrl: './author-entry.component.html',
  styleUrls: ['./author-entry.component.css']
})
export class AuthorEntryComponent implements OnInit {

  private author$: Observable<Author>;

  constructor(private activatedRoute: ActivatedRoute, private authorService: AuthorService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.author$ = this.authorService.getAuthor(data.id);
    })
  }

}
