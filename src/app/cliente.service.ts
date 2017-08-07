import {Injectable} from '@angular/core';
import {BASEURL} from "./domain";
import {Http} from "@angular/http";
import * as httpParse from './utils';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {IOperadores} from "./operadores.interface";

@Injectable()
export class ClienteService {
  private urlOperadores: string = `${BASEURL}/posbys/operador/list/`

  constructor(private http: Http) {
  }

  getOperadores(): Observable<IOperadores[]> {
    return this.http.get(this.urlOperadores)
      .map(httpParse.extractData)
      .catch(httpParse.handleError)
  }
}
