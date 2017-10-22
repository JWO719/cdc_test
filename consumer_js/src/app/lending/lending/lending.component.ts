import {Component, OnInit, TemplateRef} from '@angular/core';
import {LendingService} from "../../shared/lending.service";
import {Lending} from "../../shared/lending";
import {Observable} from "rxjs/Observable";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {

  public lendings$: Observable<Array<Lending>>;

  public modalRef: BsModalRef;

  public form: FormGroup;

  constructor(private lendingService: LendingService, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'title': ['', Validators.required],
      'return_date': ['', Validators.required],
    });
    this.loadLendings();
  }

  public loadLendings(){
    this.lendings$ = this.lendingService.getAllLendings();
  }

  public onInputChanged(lending: Lending){
    this.lendingService.updateLending(lending)
      .subscribe(data => {
        console.log('update lending', lending);
      });
  }

  deleteLending(lending: Lending) {
    this.lendingService.delete(lending).subscribe((data) => {
      console.log('lending deleted', data);
      this.loadLendings();
    })
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public submit(){
    const lending: Lending = this.form.getRawValue();
    this.lendingService.create(lending).subscribe((data) => {
      console.log('lending created', data);
      this.loadLendings();
    })
  }
}
