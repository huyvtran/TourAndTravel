import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationService {

  constructor(public http: Http) {
    console.log('Hello LocationService Provider');
    this.http = http;
  }


  searchLocation(locationName) {
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/cities?id='+encodeURI(locationName) ;
        var response = this.http.get(url).map(res => res.json());
        if (response==null){
          var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/cities?id='+encodeURI(locationName) ;
          var response = this.http.get(url).map(res => res.json());
        }
        return response;
    }


}
