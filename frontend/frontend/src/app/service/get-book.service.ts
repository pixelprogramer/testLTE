import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {routerGlobal} from "./routerGlobal";
import {Observable} from "rxjs/index";

@Injectable()

export class GetBookService {
  public routerGlobalBackend: any;

  constructor(public _Http: HttpClient) {
    this.routerGlobalBackend = routerGlobal.urlBackend;
  }

  getBook(): Observable<any> {
    let header = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this._Http.post(this.routerGlobalBackend + 'books/getBooks', null, {headers: header});
  }
}
