import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'book',
    loadChildren: './books/books.module#BooksModule'
  },{
    path: 'author',
    loadChildren: './authors/authors.module#AuthorsModule'
  }, {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
