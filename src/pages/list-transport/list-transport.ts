import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FilterTransportPage} from '../filter-transport/filter-transport';
/*
  Generated class for the ListTransport page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-transport',
  templateUrl: 'list-transport.html'
})
export class ListTransportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTransportPage');
  }

     filtertransTapped(event) {
    this.navCtrl.push(FilterTransportPage);
  }

  
}
