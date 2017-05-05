import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

import {IteneraryService} from '../../providers/itenerary-service';
import {DestinationPage1} from '../destination1/destination1';
import {ListHotelPage} from '../list-hotel/list-hotel';
import {FilterTransportPage} from '../filter-transport/filter-transport';
import {ListAttractionPage} from '../list-attraction/list-attraction';
import {InputTravellersPage} from '../input-travellers/input-travellers';
import {ConfirmBookingPage} from '../confirm-booking/confirm-booking';

@Component({
  selector: 'page-itenerary-builder',
  templateUrl: 'itenerary-builder.html',
  providers: [IteneraryService]
})
export class IteneraryBuilderPage {
toursname: string;
destination:string;
attraction: string;
passenger: string;
tranportation : string;
acomodation : string;
minDate;
maxDate;
public event = {
    monthStart: '',
    monthEnd: ''
}

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public modalCtrl: ModalController,  
  private ite: IteneraryService) {          
    this.toursname= ''
    this.destination = this.ite.getDestination();
    this.passenger='';
    this.attraction = '';
    this.tranportation = '';
    this.acomodation = '';
    this.event ={ monthStart: new Date().toISOString().substring(0,10),
    monthEnd: new Date().toISOString().substring(0,10)};



  }

  ionViewWillEnter() {
    var des = this.ite.getDestination();
    var att = this.ite.getAttraction();
    var tourName = this.ite.getToursName();
    var transportName = this.ite.getTransport();
    var acomodationName =  this.ite.getAcomodation();
    var passengerTotal = this.ite.getPassenger();
    var dateTours = this.ite.getDateTour();
     if(des != null){
       
      this.destination=des;
    }

    if(att != null){
      this.attraction=att.attrac.Name;
    }
    if (tourName !=null){
      this.toursname=tourName;
    }
     if(transportName != null){
      this.tranportation=transportName.trans.Name;
    }
     if(acomodationName != null){
      this.acomodation=acomodationName.hot.Name;
    }
     if(passengerTotal != null){
       var adult = passengerTotal.guestTour['AdultQty'];
       var child = passengerTotal.guestTour['ChildQty'];
       var infant = passengerTotal.guestTour['InfantQty'];
       if ( adult!=0 && child !=0 && infant !=0){
         this.passenger = +adult+' Adults, '+child+' Childs, '+infant+' Infant ';
       }else if(adult!=0 && child !=0 && infant ==0){
          this.passenger = +adult+' Adults, '+child+' Childs';
       }else if(adult!=0 && child ==0 && infant !=0){
          this.passenger = +adult+' Adults, '+infant+' Infant ';
       }else if(adult==0 && child !=0 && infant !=0){
          this.passenger = +child+' Childs, '+infant+' Infant ';
       }else if(adult!=0 && child ==0 && infant ==0){
          this.passenger = +adult+' Adults';
       }else if(adult==0 && child !=0 && infant ==0){
          this.passenger = +child+' Childs';
       }else if(adult==0 && child ==0 && infant !=0){
         this.passenger = +infant+' Infant ';

       }


    }

    if(dateTours != null){
      this.event=dateTours.ev;
    }
  }


  inputToursName(event){
    var data = event.target.value;
    this.ite.setToursName(data);
  }

   inputDateTours(ev){

    var data = JSON.stringify({ev});
    console.log(data);
    this.ite.setDateTour(data);
  }

    destinationTapped(event) {
    //this.navCtrl.pop();
    //this.navCtrl.push(DestinationPage1).then((data)=>
    this.navCtrl.push(DestinationPage1);
    
  }

   passengerTapped(event) {
    this.navCtrl.push(InputTravellersPage);
  }

    hotelTapped(event) {
    this.navCtrl.push(ListHotelPage);
  }
    transportTapped(event) {
    this.navCtrl.push(FilterTransportPage);
  }

    attractionTapped(event) {
    this.navCtrl.push(ListAttractionPage);
  }

    createItenerary(event) {
    this.navCtrl.push(ConfirmBookingPage);
  }


}