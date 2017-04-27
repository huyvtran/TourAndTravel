import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IteneraryBuilderPage} from '../itenerary-builder/itenerary-builder';

/*
  Generated class for the HotelRoomallocate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hotel-roomallocate',
  templateUrl: 'hotel-roomallocate.html'
})
export class HotelRoomallocatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelRoomallocatePage');
  }
    doneTapped(event) {
    this.navCtrl.push(IteneraryBuilderPage);
  }

}
