import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LendingService} from "../../shared/lending.service";
import {Observable} from "rxjs/Observable";
import {Lending} from "../../shared/lending";

@Component({
  selector: 'app-lending-entry',
  templateUrl: './lending-entry.component.html',
  styleUrls: ['./lending-entry.component.css']
})
export class LendingEntryComponent implements OnInit {

  private lending$: Observable<Lending>;

  constructor(private activeRoute: ActivatedRoute, private lendingService: LendingService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      this.lending$ = this.lendingService.getOneLendings(data.id);
    })
  }

}
