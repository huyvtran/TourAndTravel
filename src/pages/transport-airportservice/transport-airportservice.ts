import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IteneraryBuilderPage} from '../itenerary-builder/itenerary-builder'
import {IteneraryService} from '../../providers/itenerary-service';

@Component({
  selector: 'page-transport-airportservice',
  templateUrl: 'transport-airportservice.html',
  providers: [IteneraryService]
})
export class TransportAirportservicePage {
   transportser:Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams , public ite : IteneraryService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportAirportservicePage');
  }

  ionViewWillEnter() {
      let id = this.ite.getTransport();
      this.transportser=id.trans['TransportationItemServiceTypes'];
      console.log(this.transportser);
  }
  setTransService(itemser){
    console.log(itemser);
     var data = JSON.stringify({itemser});
     console.log(data);
     this.ite.setTransportSer(data);
  }

   tappedDone(event) {
    this.navCtrl.push(IteneraryBuilderPage);
  }

}
