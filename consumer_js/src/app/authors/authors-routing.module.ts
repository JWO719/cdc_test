import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorComponent} from "./author/author.component";
import {AuthorEntryComponent} from "./author-entry/author-entry.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorComponent
  },{
    path: ':id',
    component: AuthorEntryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
