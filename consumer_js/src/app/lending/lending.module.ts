import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LendingRoutingModule } from './lending-routing.module';
import { LendingComponent } from './lending/lending.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    LendingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [LendingComponent]
})
export class LendingModule { }
