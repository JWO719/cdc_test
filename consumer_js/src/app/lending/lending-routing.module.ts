import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LendingComponent} from "./lending/lending.component";
import {LendingEntryComponent} from "./lending-entry/lending-entry.component";

const routes: Routes = [
  {
    path: '',
    component: LendingComponent
  }, {
    path: ':id',
    component: LendingEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LendingRoutingModule { }
