import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {AuthService} from '../providers/auth-token-service'
import {IteneraryService} from '../providers/itenerary-service'
import 'rxjs/add/operator/map';


@Injectable()
export class AcomodationService {

  constructor(public http: Http,public auth:AuthService, public ite:IteneraryService) {
    console.log('Hello AcomodationService Provider');
  }

   searchListAcomodation() {
        var headers = new Headers();
        let des = this.ite.getDestination();
        let token = this.auth.AuthToken;
        console.log(token);
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationProfiles/ByCity?city=' +des; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }


}
