import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListHotelPage} from '../list-hotel/list-hotel';

/*
  Generated class for the FilterHotel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-hotel',
  templateUrl: 'filter-hotel.html'
})
export class FilterHotelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterHotelPage');
  }

     listTapped(event) {
    this.navCtrl.push(ListHotelPage);
  }

}
