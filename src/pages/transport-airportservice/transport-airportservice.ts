import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IteneraryBuilderPage} from '../itenerary-builder/itenerary-builder'

@Component({
  selector: 'page-transport-airportservice',
  templateUrl: 'transport-airportservice.html'
})
export class TransportAirportservicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportAirportservicePage');
  }

   tappedDone(event) {
    this.navCtrl.push(IteneraryBuilderPage);
  }

}
