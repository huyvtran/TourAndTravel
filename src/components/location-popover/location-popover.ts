
import { Component } from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';
import { DestinationPage  } from '../../pages/destination/destination';



@Component({
  selector: 'location-popover',
  templateUrl: 'location-popover.html'
})
export class LocationPopoverComponent {

  locationList = [{Id: 'Denpasar'}, {Id: 'Jakarta'}, {Id: 'Bandung'}, {Id: 'Choose Destination'}];
  selectedLocation: string;
  selectedLocation2;
  
  constructor(public viewCtrl: ViewController, public navCtrl: NavController) {
    this.selectedLocation = "";
    this.selectedLocation2=null;
  }


  public setSelectedLocation(selectedItem) {
    if(selectedItem != 'Choose Destination'){
      this.selectedLocation = selectedItem;
      this.viewCtrl.dismiss(this.selectedLocation);
    }else{
      this.navCtrl.push(DestinationPage);
    }
  }

   public setLocation(selectedItem) {
      window.localStorage.setItem('loc', selectedItem);
      this.selectedLocation2 = selectedItem;
      this.viewCtrl.dismiss(this.selectedLocation2);
       
  }
   public getLocation(){
      var loc = window.localStorage.getItem('loc');
      this.selectedLocation2 = loc;
      return this.selectedLocation2; 
   }


  sayHello() {
    alert("Hello World!");
  }

}
