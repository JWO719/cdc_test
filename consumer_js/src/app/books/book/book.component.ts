import {Component, OnInit, TemplateRef} from '@angular/core';
import {BookService} from "../../shared/book.service";
import {Observable} from "rxjs/Observable";
import {Book} from "../../shared/book";
import {BsModalService} from "ngx-bootstrap/modal";
import {BsModalRef} from "ngx-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private books: Observable<Array<Book>>

  public modalRef: BsModalRef;

  public form: FormGroup;

  constructor(private bookService: BookService, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'id': ['', Validators.required],
      'title': ['', Validators.required],
      'author': this.formBuilder.group({
        'id': ['', Validators.required],
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required]
      })
    });
    this.loadBooks();
  }

  public deleteBook(id: number){
    this.bookService.delete(id)
      .subscribe(() => {
        this.loadBooks();
      });
  }

  public loadBooks() {
    this.books = this.bookService.getBooks();
  }

  public onInputChanged(book){
    this.bookService.updateBook(book).subscribe(() => {
      console.info('book is updated');
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public submit(){
    const book: Book = this.form.getRawValue();
    this.bookService.createBook(book).subscribe(data => {
      console.log(data.headers.get('Location'), data);
      this.loadBooks();
      this.modalRef.hide();
    });
  }
}
