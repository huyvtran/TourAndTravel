import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FilterHotelPage} from '../filter-hotel/filter-hotel';


/*
  Generated class for the ListHotel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-hotel',
  templateUrl: 'list-hotel.html'
})
export class ListHotelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListHotelPage');
  }

   filterhotelTapped(event) {
    this.navCtrl.push(FilterHotelPage);
  }
}
