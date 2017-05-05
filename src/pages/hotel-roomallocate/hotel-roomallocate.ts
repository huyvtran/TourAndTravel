import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
//import {IteneraryBuilderPage} from '../itenerary-builder/itenerary-builder';
import {IteneraryService} from '../../providers/itenerary-service';

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

  allocRoom = { sharingRooms: null, singleRoom: null, extraBed: null, sharingBed:null };

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public ite : IteneraryService,
  private viewCtrl: ViewController
  
  ) {
  this.allocRoom = { sharingRooms: 0, singleRoom: 0, extraBed: 0, sharingBed:0 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelRoomallocatePage');
  }

    doneTapped(allocroom) {
      console.log(allocroom);
      var data = JSON.stringify({allocroom});
      this.ite.setRoomAllo(data);
      this.navCtrl.pop().then(() => {
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
        this.navCtrl.remove(index-1);
        this.navCtrl.remove(index-2);
      });
  }

}
