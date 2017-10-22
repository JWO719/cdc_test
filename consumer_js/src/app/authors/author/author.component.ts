import {Component, OnInit, TemplateRef} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Author} from "../../shared/author";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorService} from "../../shared/author.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  private authors: Observable<Array<Author>>;

  public modalRef: BsModalRef;

  public form: FormGroup;

  constructor(private authorService: AuthorService, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'id': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
    });
    this.loadAuthors();
  }

  public deleteAuthor(id: number){
    this.authorService.delete(id)
      .subscribe(() => {
        this.loadAuthors();
      });
  }

  public loadAuthors() {
    this.authors = this.authorService.getAuthors();
  }

  public onInputChanged(author){
    this.authorService.updateAuthor(author).subscribe(() => {
      console.info('author is updated');
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public submit(){
    const author: Author = this.form.getRawValue();
    this.authorService.createAuthor(author).subscribe(data => {
      console.log(data.headers.get('Location'), data);
      this.loadAuthors();
      this.modalRef.hide();
    });
  }
}
