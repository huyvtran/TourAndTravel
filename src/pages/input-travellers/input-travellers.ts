import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {IteneraryService} from '../../providers/itenerary-service';
import {IteneraryBuilderPage} from '../itenerary-builder/itenerary-builder';

/*
  Generated class for the InputTravellers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-input-travellers',
  templateUrl: 'input-travellers.html'
})
export class InputTravellersPage {
  guestTour = { AdultQty: null, ChildQty: null, InfantQty: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ite : IteneraryService) {
    this.guestTour = { AdultQty: 0, ChildQty: 0, InfantQty: 0}
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputTravellersPage');
  }

  doneTapped(guestTour) {
      console.log(guestTour);
      var data = JSON.stringify({guestTour});
      this.ite.setPassenger(data);
      this.navCtrl.pop();
      this.navCtrl.push(IteneraryBuilderPage);
  }

}
