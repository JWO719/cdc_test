import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BookService} from "./shared/book.service";
import {HttpModule} from "@angular/http";

import 'rxjs/add/operator/map';
import {AuthorService} from "./shared/author.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [BookService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
