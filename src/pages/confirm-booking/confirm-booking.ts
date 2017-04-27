import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CustomePackagePage} from '../custome-package/custome-package';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmBookingPage');
  }

  confirmTapped(event) {
    this.navCtrl.setRoot(CustomePackagePage);
  }

}
