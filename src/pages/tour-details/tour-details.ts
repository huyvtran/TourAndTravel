import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HistoryService} from '../../providers/history-service';
/*
  Generated class for the TourDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tour-details',
  templateUrl: 'tour-details.html'
})
export class TourDetailsPage {
  BookingDetailSum: Array<any>;
  AccommodationSum: Array<any>;
  TransportationSum: Array<any>;
  AttractionSum: Array<any>;
  TourPriceSum: Array<any>;
  curency;
  selectedId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public his : HistoryService) {
  this.BookingDetailSum= null;
  this.AccommodationSum= null;
  this.TransportationSum= null;
  this.AttractionSum= null;
  this.TourPriceSum=null;
  this.curency=null;
  this.selectedId = navParams.data;
  }

  ionViewWillEnter() {
    this.his.getTransactionsSumarry(this.selectedId).subscribe(data=>{
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
  

}
