import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the IteneraryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IteneraryService {
    toursname;
    destination;
    passengger;
    acomodation;
    transportation;
    attraction: any = {};

    roomtype;
    roomallocate;

  constructor(public http: Http) {
    this.toursname;
    this.destination="Selected Destination";
    this.passengger=null;
    this.acomodation=null;
    this.transportation=null;
    this.attraction=null;

    this.roomtype=null;
    this.roomallocate=null;
  }
   public setToursName(name) {
        window.localStorage.setItem('tName', name);
        this.toursname=name;
    }

     public getToursName() {
        var name = window.localStorage.getItem('tName');
        this.toursname=name;
        return this.toursname;
    }

   public setDestination(des) {
        window.localStorage.setItem('des', des);
        this.destination=des;
    }

     public getDestination() {
        var des = window.localStorage.getItem('des');
        this.destination=des;
        return this.destination;
    }

    public setAttraction(att) {
        window.localStorage.setItem('att', att);
        this.attraction=att;
    }

     public getAttraction() {
        var att = JSON.parse(window.localStorage.getItem('att'));
        this.attraction=att;
        return this.attraction;
    }

     public setTransport(trans) {
        window.localStorage.setItem('trans', trans);
        this.transportation=trans;
    }

     public getTransport() {
        var trans = JSON.parse(window.localStorage.getItem('trans'));
        this.transportation=trans;
        return this.transportation;
    }


     public setAcomodation(hot) {
        window.localStorage.setItem('hot', hot);
        this.acomodation=hot;
    }

     public getAcomodation() {
        var hot = JSON.parse(window.localStorage.getItem('hot'));
        this.acomodation=hot;
        return this.acomodation;
    }

     public setRoomType(room) {
        window.localStorage.setItem('room', room);
        this.roomtype=room;
    }
    
     public getRoomType() {
        var room = JSON.parse(window.localStorage.getItem('room'));
        this.roomtype=room;
        return this.roomtype;
    }

    public setRoomAllo(aloc) {
        window.localStorage.setItem('aloc', aloc);
        this.roomallocate=aloc;
    }
    
     public getRoomAllo() {
        var aloc = JSON.parse(window.localStorage.getItem('aloc'));
        this.roomallocate=aloc;
        return this.roomallocate;
    }



}
