import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorComponent } from './author/author.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [AuthorComponent]
})
export class AuthorsModule { }
