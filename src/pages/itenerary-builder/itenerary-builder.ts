import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import { IteneraryService } from '../../providers/itenerary-service';
import { FiltransportService } from '../../providers/filtransport-service';
import { DestinationPage1 } from '../destination1/destination1';
//import {ListHotelPage} from '../list-hotel/list-hotel';
//import {FilterTransportPage} from '../filter-transport/filter-transport';
import { FilterTransport2Page } from '../filter-transport2/filter-transport2';
import { FilterHotel2Page } from '../filter-hotel2/filter-hotel2';
import { ListAttractionPage } from '../list-attraction/list-attraction';
import { InputTravellersPage } from '../input-travellers/input-travellers';
import { ConfirmBookingPage } from '../confirm-booking/confirm-booking';

@Component({
  selector: 'page-itenerary-builder',
  templateUrl: 'itenerary-builder.html',
  providers: [IteneraryService, FiltransportService]
})
export class IteneraryBuilderPage {
  toursname: string;
  destination: string;
  attraction: string;
  passenger: string;
  tranportation: string;
  acomodation: string;
  minDate;
  maxDate;
  public event = {
    monthStart: '',
    monthEnd: ''
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private ite: IteneraryService,
    public fil: FiltransportService,
    public alertCtrl: AlertController
  ) {
    this.toursname = ''
    this.destination = this.ite.getDestination();
    this.passenger = '';
    this.attraction = '';
    this.tranportation = '';
    this.acomodation = '';
    this.event = {
      monthStart: new Date().toISOString().substring(0, 10),
      monthEnd: new Date().toISOString().substring(0, 10)
    };

  }

  ionViewWillEnter() {

    var des = this.ite.getDestination();
    var att = this.ite.getAttraction();
    var tourName = this.ite.getToursName();
    var transportName = this.ite.getTransport();
    var acomodationName = this.ite.getAcomodation();
    var passengerTotal = this.ite.getPassenger();
    var dateTours = this.ite.getDateTour();
    if (des != null) {

      this.destination = des;
    }

    if (att != null) {
        //let n = att.attrac.length;
        this.attraction = att.attrac
    }
    if (tourName != null) {
      this.toursname = tourName;
    }
    if (transportName != null) {
      if(this.ite.getTransportSer()==null) this.tranportation = transportName.trans.Name;
      else this.tranportation = transportName.trans.Name+', '+transportName.trans.TransportationSeatTypeName+' Seater, ' +this.ite.getTransportSer().itemser;
    }
    if (acomodationName != null) {
      if(this.ite.getRoomSer()==null) this.acomodation = acomodationName.hot.Name;
      else this.acomodation = acomodationName.hot.Name+', '+this.ite.getRoomType().itemroom.AccommodationItemTypeName+', '+this.ite.getRoomSer().itemser;
    }
    if (passengerTotal != null) {
      var adult = passengerTotal.guestTour['AdultQty'];
      var child = passengerTotal.guestTour['ChildQty'];
      var infant = passengerTotal.guestTour['InfantQty'];
      if (adult != 0 && child != 0 && infant != 0) {
        this.passenger = +adult + ' Adults, ' + child + ' Childs, ' + infant + ' Infant ';
      } else if (adult != 0 && child != 0 && infant == 0) {
        this.passenger = +adult + ' Adults, ' + child + ' Childs';
      } else if (adult != 0 && child == 0 && infant != 0) {
        this.passenger = +adult + ' Adults, ' + infant + ' Infant ';
      } else if (adult == 0 && child != 0 && infant != 0) {
        this.passenger = +child + ' Childs, ' + infant + ' Infant ';
      } else if (adult != 0 && child == 0 && infant == 0) {
        this.passenger = +adult + ' Adults';
      } else if (adult == 0 && child != 0 && infant == 0) {
        this.passenger = +child + ' Childs';
      } else if (adult == 0 && child == 0 && infant != 0) {
        this.passenger = +infant + ' Infant ';
      }
    }

    if (dateTours != null) {
      this.event = dateTours.ev;
    }
  }


  inputToursName(event) {
    var data = event.target.value;
    this.ite.setToursName(data);
  }

  inputDateTours(ev) {
    var data = JSON.stringify({ ev });
    console.log(data);
    this.ite.setDateTour(data);
  }

  destinationTapped(event) {
    this.navCtrl.push(DestinationPage1);
  }

  passengerTapped(event) {
    this.navCtrl.push(InputTravellersPage);
  }

  hotelTapped(event) {
    if (this.destination == '') this.showAlertDestination();
    else this.navCtrl.push(FilterHotel2Page);
  }
  transportTapped(event) {
    if (this.destination == '') this.showAlertDestination();
    else this.navCtrl.push(FilterTransport2Page);
  }

  attractionTapped(event) {
    if (this.destination == '') this.showAlertDestination();
    else this.navCtrl.push(ListAttractionPage);
  }



  createItenerary(event) {
    if (this.toursname == '') this.showAlertTourName();
    else if (this.destination == '') this.showAlertDestination();
    else if (this.ite.getDateTour() == null) this.showAlertDates();
    else if (this.passenger == '') this.showAlertGuest();
    else this.navCtrl.push(ConfirmBookingPage);
  }


  //alert-alert
  showAlertTourName() {
    let alert = this.alertCtrl.create({
      subTitle: 'Please Input Tours Name ',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDestination() {
    let alert = this.alertCtrl.create({
      subTitle: 'Please Choose Your Destination ',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertDates() {
    let alert = this.alertCtrl.create({
      subTitle: 'Please Change Your Date Tour ',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertGuest() {
    let alert = this.alertCtrl.create({
      subTitle: 'Please Input Guest Tour ',
      buttons: ['OK']
    });
    alert.present();
  }




}