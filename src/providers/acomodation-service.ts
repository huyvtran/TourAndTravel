import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {AuthService} from '../providers/auth-token-service'
import {IteneraryService} from '../providers/itenerary-service'
import 'rxjs/add/operator/map';


@Injectable()
export class AcomodationService {
    ratings;
    areas;
    locations;
    types;
    facilities;


  constructor(public http: Http,public auth:AuthService, public ite:IteneraryService) {
    this.ratings = null;
    this.areas = null;
    this.locations = null;
    this.types= null;
    this.facilities = null;
  }


  setRatings(rat){
      this.ratings= rat;
  }
  setAreas(ar){
      this.areas= ar;
  }
  setLocations(loc){
      this.locations= loc;
  }
  setTypes(ty){
      this.types= ty;
  }
  setFacilities(fac){
      this.facilities= fac;
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

    searchListAcomodationFilter() {
        var headers = new Headers();
        let des = this.ite.getDestination();
        let rat = this.ratings;
        let ar = this.areas;
        let loc = this.locations;
        let ty = this.types;
        let fac = this.facilities;
        let token = this.auth.AuthToken;
        console.log(token);
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationProfiles/Filter?cityId='+des+'&ratingId='+rat +'&areaId='+ar+'&locationId='+loc+'&typeId='+ty+'&facilityId='+fac; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }

    searchListItemAcomodation(){
        var headers = new Headers();
        let token = this.auth.AuthToken;
        let id = this.ite.getAcomodation();
        console.log(token);
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationItems/byprofile?profileid='+id.hot.Id; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }

    //  getAcomodationService(){
    //     var headers = new Headers();
    //     let token = this.auth.AuthToken;
    //     let id = this.ite.getRoomType();
    //     console.log(token);
    //     headers.append('Authorization', 'Bearer ' +token);
    //     var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationItems?id='+id.room.Id; 
    //     var response = this.http.get(url, {headers : headers}).map(res => res.json());        
    //     return response;
    // }


    


}
