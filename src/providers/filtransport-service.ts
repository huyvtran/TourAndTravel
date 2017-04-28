import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
//import {AuthService} from '../providers/auth-token-service'
//import {IteneraryService} from '../providers/itenerary-service'
import 'rxjs/add/operator/map';

/*
  Generated class for the FiltransportService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FiltransportService {

  constructor(public http: Http) {
    console.log('Hello FiltransportService Provider');
  }

}
