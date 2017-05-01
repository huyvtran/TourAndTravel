import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HotelRoomallocatePage} from '../hotel-roomallocate/hotel-roomallocate';
import {IteneraryService} from '../../providers/itenerary-service';

@Component({
  selector: 'page-hotel-roomservice',
  templateUrl: 'hotel-roomservice.html',
  providers: [IteneraryService]
})
export class HotelRoomservicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public ite : IteneraryService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelRoomservicePage');
  }

  setSelectedRoomSer(itemser) {
     console.log(itemser);
     var data = JSON.stringify({itemser});
     console.log(data);
     this.ite.setRoomType(data);
     this.navCtrl.push(HotelRoomallocatePage);
  }


}
