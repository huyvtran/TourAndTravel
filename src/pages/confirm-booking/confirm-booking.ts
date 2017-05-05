import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CustomePackagePage} from '../custome-package/custome-package';
import {TransactionService} from '../../providers/transaction-service';
/*
  Generated class for the ConfirmBooking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-confirm-booking',
  templateUrl: 'confirm-booking.html'
})
export class ConfirmBookingPage {
  BookingDetailSum: Array<any>;
  AccommodationSum: Array<any>;
  TransportationSum: Array<any>;
  AttractionSum: Array<any>;
  TourPriceSum: Array<any>;
  curency;
  constructor(public navCtrl: NavController, public navParams: NavParams, public transaction : TransactionService) {
  this.BookingDetailSum= null;
  this.AccommodationSum= null;
  this.TransportationSum= null;
  this.AttractionSum= null;
  this.TourPriceSum=null;
  this.curency=null;

  }

  ionViewWillEnter() {
    this.transaction.getTourPrice().subscribe(data=>{
            this.BookingDetailSum= Array.of(data['BookingDetailSum']);
            this.AccommodationSum=Array.of(data['AccommodationSum']);
            this.TransportationSum=Array.of(data['TransportationSum']);
            this.AttractionSum=(data['AttractionSum']);
            this.TourPriceSum=Array.of(data['TourPriceSum']);
      

            },err => {
                    console.log(err);
                },
                () => console.log('Get Transaction Complete')
            );
  }

  confirmTapped(event) {
    this.transaction.getTourTransaksi().subscribe(data=>{console.log(data);} ,err =>{console.log(err);}, ()=> console.log('post Transaction Complete')
    );
    this.navCtrl.setRoot(CustomePackagePage);
  }

}
