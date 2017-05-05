import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {AuthService} from '../providers/auth-token-service'
import {IteneraryService} from '../providers/itenerary-service'
import 'rxjs/add/operator/map';

@Injectable()
export class TransportService {

  constructor(public http: Http,public auth:AuthService, public ite:IteneraryService) {
    console.log('Hello TransportService Provider');
  }

   listTransport() {
        var headers = new Headers();
        let token = this.auth.AuthToken;
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TransportationUnits'; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }

    listTransportbyFilter(){
        var headers = new Headers();
        let token = this.auth.AuthToken;
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TransportationUnits/GetTransportationUnit?ratingId=3&seatTypeId=1&typeId=1&servicetypeid=1'; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;

    }

}
