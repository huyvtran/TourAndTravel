import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from '../providers/auth-token-service'
import { IteneraryService } from '../providers/itenerary-service'
import 'rxjs/add/operator/map';

@Injectable()
export class TransportService {
    ratings;
    types;
    seats;

    constructor(public http: Http, public auth: AuthService, public ite: IteneraryService) {
    }

    public setRatings(rat) {
        console.log(rat)
        window.localStorage.setItem('ratTrans', rat);
        this.ratings = rat;
    }

    public setTypes(ty) {
        window.localStorage.setItem('tyTrans', ty);
        this.types = ty;
    }
    public setSeats(se) {
        window.localStorage.setItem('seTrans', se);
        this.seats = se;
    }

  delStorFilTra(){
            localStorage.removeItem('ratTrans');
            localStorage.removeItem('seTrans');
            localStorage.removeItem('tyTrans');
  }

    listTransportFilter() {
        var headers = new Headers();
        let token = this.auth.AuthToken;
        let des = this.ite.getDestination();
        let rat = window.localStorage.getItem('ratTrans');
        let se = window.localStorage.getItem('seTrans');
        let ty = window.localStorage.getItem('tyTrans');

        if (rat == null) { rat = ''; }
        if (se == null) { se = ''; }
        if (ty == null) { ty = ''; }

        headers.append('Authorization', 'Bearer ' + token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TransportationUnits/ByCity?CityId=' + des + '&RatingId=' + rat + '&seatTypeId=' + se + '&typeId=' + ty;
        var response = this.http.get(url, { headers: headers }).map(res => res.json());
        return response;
    }

    listTransport() {
        var headers = new Headers();
        let token = this.auth.AuthToken;
        headers.append('Authorization', 'Bearer ' + token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TransportationUnits';
        var response = this.http.get(url, { headers: headers }).map(res => res.json());
        return response;
    }

    listTransportbyCity() {
        var headers = new Headers();
        let token = this.auth.AuthToken;
        let des = this.ite.getDestination();
        headers.append('Authorization', 'Bearer ' + token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TransportationUnits/ByCity?CityId=' + des;
        var response = this.http.get(url, { headers: headers }).map(res => res.json());
        return response;
    }



    listTransportbyFilter() {
        var headers = new Headers();
        let token = this.auth.AuthToken;
        headers.append('Authorization', 'Bearer ' + token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TransportationUnits/GetTransportationUnit?ratingId=3&seatTypeId=1&typeId=1&servicetypeid=1';
        var response = this.http.get(url, { headers: headers }).map(res => res.json());
        return response;

    }

}
