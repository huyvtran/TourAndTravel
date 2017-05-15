import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from '../providers/auth-token-service';
import {IteneraryService} from '../providers/itenerary-service';

/*
  Generated class for the HistoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HistoryService {

  constructor(public http: Http, public auth:AuthService, public ite:IteneraryService) {
    console.log('Hello HistoryService Provider');
  }


   getHistoryTransactions(){
        var headers = new Headers();
        let token = this.auth.AuthToken;
        console.log(token);
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TourTransactions/TransactionHistory?status=Open'; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }

     getTransactionsSumarry(id){
        var headers = new Headers();
        let token = this.auth.AuthToken;
        console.log(token);
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TourTransactions/TransactionSummary?id='+id; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }

}
