
import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the LocationPopover component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'location-popover',
  templateUrl: 'location-popover.html'
})
export class LocationPopoverComponent {

  text: string;
  locationList = [{Id: 'Denpasar'}, {Id: 'Jakarta'}, {Id: 'Bandung'}];
  selectedLocation: string;
  
  constructor(public viewCtrl: ViewController) {
    // console.log('Hello LocationPopover Component');
    // this.text = 'Hello World';
    this.selectedLocation = "";
  }


  setSelectedLocation(selectedItem) {
    this.selectedLocation = selectedItem;
    this.viewCtrl.dismiss(this.selectedLocation);
  }

  sayHello() {
    alert("Hello World!");
  }

}
