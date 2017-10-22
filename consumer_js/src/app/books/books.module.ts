import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [BookComponent]
})
export class BooksModule { }
