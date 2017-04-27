import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HotelRoomallocatePage} from '../hotel-roomallocate/hotel-roomallocate';
/*
  Generated class for the HotelRoomtype page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel-roomtype',
  templateUrl: 'hotel-roomtype.html'
})
export class HotelRoomtypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelRoomtypePage');
  }

roomalloTapped(event) {
    this.navCtrl.push(HotelRoomallocatePage);
  }
  
}
