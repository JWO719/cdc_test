import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookEntryComponent} from "./book-entry/book-entry.component";

const routes: Routes = [{
  path: '',
  component: BookComponent
},{
  path: ':id',
  component: BookEntryComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
