import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../providers/auth-token-service'
import { IteneraryService } from '../providers/itenerary-service'
import 'rxjs/add/operator/map';

/*
  Generated class for the FilacomodationService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FilacomodationService {

    listRatings: Array<any>;
    listAreas: Array<any>;
    listLocations: Array<any>;
    listTypes: Array<any>;
    listFacilities: Array<any>;

    constructor(public http: Http, public auth: AuthService, public ite: IteneraryService) {
        this.http = http;
        this.listRatings = null;
        this.listAreas = null;
        this.listLocations = null;
        this.listTypes = null;
        this.listFacilities = null;
        this.listRating();
        this.listArea();
        this.listLocation();
        this.listType();
        this.listFacility();
    }



    listRating() {
        this.listAcomodationRatings().subscribe(data => {
            this.listRatings = (data);
            console.log(this.listRatings);
        }, err => {
            console.log(err);
        },
            () => console.log('Ratings Search Complete')
        );
    }


    listArea() {
        this.listAcomodationAreas().subscribe(data => {
            this.listAreas = (data);
            console.log(this.listAreas);
        }, err => {
            console.log(err);
        },
            () => console.log('Area Search Complete')
        );
    }


    listLocation() {
        this.listAcomodationLocations().subscribe(data => {
            this.listLocations = (data);
            console.log(this.listLocations);
        }, err => {
            console.log(err);
        },
            () => console.log('Location Search Complete')
        );
    }


    listType() {
        this.listAcomodationTypes().subscribe(data => {
            this.listTypes = (data);
            console.log(this.listTypes);
        }, err => {
            console.log(err);
        },
            () => console.log('Type Search Complete')
        );
    }

    listFacility() {
        this.listAcomodationFacilities().subscribe(data => {
            this.listFacilities = (data);
            console.log(this.listFacilities);
        }, err => {
            console.log(err);
        },
            () => console.log('Facility Search Complete')
        );
    }


    listAcomodationRatings() {
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationRatings';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }


    listAcomodationAreas() {
        var headers = new Headers();
        let des = this.ite.getDestination();
        let token = this.auth.AuthToken;
        console.log(token);
        headers.append('Authorization', 'Bearer ' + token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/Areas/ByCity?cityId=' + des;
        var response = this.http.get(url, { headers: headers }).map(res => res.json());
        return response;
    }


    listAcomodationLocations() {
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationLocations';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listAcomodationTypes() {
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationTypes';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    listAcomodationFacilities() {
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/AccommodationFacilities';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }



}
