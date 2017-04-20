import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ListTransportPage} from '../list-transport/list-transport';
/*
  Generated class for the FilterTransport page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-transport',
  templateUrl: 'filter-transport.html'
})
export class FilterTransportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterTransportPage');
  }

       listTapped(event) {
    this.navCtrl.push(ListTransportPage);
  }

}
