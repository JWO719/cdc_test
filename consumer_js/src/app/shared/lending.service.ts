import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Lending} from "./lending";
import {environment} from "../../environments/environment";

@Injectable()
export class LendingService {

  private headers =  new Headers();

  constructor(private http: Http) {
    this.headers.append('user-id', '123');
  }

  public getAllLendings(): Observable<Array<Lending>>{
    return this.http.get(environment.lendingServiceUrl+'/lendings.json', {headers: this.headers})
      .map(res => res.json());
  }

  updateLending(lending: Lending) {
    return this.http.put(environment.lendingServiceUrl+'/lendings/'+lending.id+'.json', lending, {headers: this.headers})
  }

  delete(lending: Lending) {
    return this.http.delete(environment.lendingServiceUrl+'/lendings/'+lending.id+'.json', {headers: this.headers});
  }

  create(lending: Lending) {
    return this.http.post(environment.lendingServiceUrl+'/lendings.json', lending,{headers: this.headers});
  }
}
