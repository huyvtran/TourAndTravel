import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthService} from '../providers/auth-token-service';
import {IteneraryService} from '../providers/itenerary-service';
/*
  Generated class for the TransactionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TransactionService {

  constructor(public http: Http, public auth:AuthService, public ite:IteneraryService) {
    console.log('Hello TransactionService Provider');
  }

   getTransactionsSumarry(){
        var headers = new Headers();
        let token = this.auth.AuthToken;
        console.log(token);
        headers.append('Authorization', 'Bearer ' +token);
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TourTransactions/TransactionSummary?id=1'; 
        var response = this.http.get(url, {headers : headers}).map(res => res.json());        
        return response;
    }

     getTourPrice(){ 
        let token = this.auth.AuthToken;
         var json = { "title":  this.ite.getToursName(),
                      "AdultPaxQty": Number(this.ite.getPassenger().guestTour['AdultQty']),
                      "ChildPaxQty": Number(this.ite.getPassenger().guestTour['ChildQty']),
                      "InfantPaxQty": Number(this.ite.getPassenger().guestTour['InfantQty']), 
                      "StartDate": this.ite.getDateTour().ev['monthStart'],
                      "EndDate": this.ite.getDateTour().ev['monthEnd'],
                      "CityDestinationId": null,
                      "RegionDestinationId": "BALI",
                      "Attractions":[
                        {
                          "ServiceItemId": Number(this.ite.getAttraction().attrac.ServiceItemId),
                          "Date": this.ite.getDateTour().ev['monthStart']
                        }
                      ],
                      "Transportations":[
                        {
                          "ServiceItemId": Number(this.ite.getTransport().trans.ServiceItemId),
                          "Date": this.ite.getDateTour().ev['monthStart']
                        }
                      ],                    
                      "Accommodations":[
                        {
                          "ServiceItemId": Number(this.ite.getRoomType().itemroom.ServiceItemId),
                          "Date": this.ite.getDateTour().ev['monthStart'],
                          "SharingRoomQty": Number(this.ite.getRoomAllo().allocroom.sharingRooms),
                          "SingleRoomQty" : Number(this.ite.getRoomAllo().allocroom.singleRoom),
                          "AccommodationItemServiceType": this.ite.getRoomSer().itemser
                        }                      
                      ]

                    };
     

        console.log(token);
        var headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' +token);
        //headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TourTransactions/DemoPrice'; 
        var response = this.http.post(url, json, options).map(res => res.json());        
        return response;
    }


     getTourTransaksi(){ 
        let token = this.auth.AuthToken;
         var json = { "title":  this.ite.getToursName(),
                      "AdultPaxQty": Number(this.ite.getPassenger().guestTour['AdultQty']),
                      "ChildPaxQty": Number(this.ite.getPassenger().guestTour['ChildQty']),
                      "InfantPaxQty": Number(this.ite.getPassenger().guestTour['InfantQty']), 
                      "StartDate": this.ite.getDateTour().ev['monthStart'],
                      "EndDate": this.ite.getDateTour().ev['monthEnd'],
                      "CityDestinationId": null,
                      "RegionDestinationId": "BALI",
                      "Attractions":[
                        {
                          "ServiceItemId": Number(this.ite.getAttraction().attrac.ServiceItemId),
                          "Date": this.ite.getDateTour().ev['monthStart']
                        }
                      ],
                      "Transportations":[
                        {
                          "ServiceItemId": Number(this.ite.getTransport().trans.ServiceItemId),
                          "Date": this.ite.getDateTour().ev['monthStart']
                        }
                      ],                    
                      "Accommodations":[
                        {
                          "ServiceItemId": Number(this.ite.getRoomType().itemroom.ServiceItemId),
                          "Date": this.ite.getDateTour().ev['monthStart'],
                          "SharingRoomQty": Number(this.ite.getRoomAllo().allocroom.sharingRooms),
                          "SingleRoomQty" : Number(this.ite.getRoomAllo().allocroom.singleRoom),
                          "AccommodationItemServiceType": this.ite.getRoomSer().itemser
                        }                      
                      ]

                    };
     

        console.log(token);
        var headers = new Headers({'Content-Type': 'application/json'});
        headers.append('Authorization', 'Bearer ' +token);
        //headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        var url = 'http://cloud.basajans.com:8868/tripplannerdev/api/TourTransactions/'; 
        var response = this.http.post(url, json, options).map(res => res.json());        
        return response;
    }

}
