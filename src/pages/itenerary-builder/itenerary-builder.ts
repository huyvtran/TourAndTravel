import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform,ViewController } from 'ionic-angular';

import {DestinationPage} from '../destination/destination';
import {ListHotelPage} from '../list-hotel/list-hotel';
import {FilterTransportPage} from '../filter-transport/filter-transport';
import {ListAttractionPage} from '../list-attraction/list-attraction';
import {InputTravellersPage} from '../input-travellers/input-travellers';
@Component({
  selector: 'page-itenerary-builder',
  templateUrl: 'itenerary-builder.html'
})
export class IteneraryBuilderPage {

public event = {
    monthStart: '1990-02-19',
    monthEnd: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad IteneraryBuilderPage');
  }

    destinationTapped(event) {
    this.navCtrl.push(DestinationPage);
  }

    hotelTapped(event) {
    this.navCtrl.push(ListHotelPage);
  }
    transportTapped(event) {
    this.navCtrl.push(FilterTransportPage);
  }

    attractionTapped(event) {
    this.navCtrl.push(ListAttractionPage);
  }

  openModal() {

    let modal = this.modalCtrl.create(InputTravellersPage);
    modal.present();
}



// doPrompt() {
//     let alert = this.alertCtrl.create({
//     title: 'Travellers',
//     inputs: [
//       {
//         name: 'adults',
//         placeholder: 'Enter Adults',
//         type: 'number'
//       },
//       {
//         name: 'children',
//         placeholder: 'Enter Children',
//         type: 'number'
//       },
//       {
//         name: 'children',
//         placeholder: 'Enter Infant',
//         type: 'number'
//       }

//     ],
//     buttons: [
//       {
//         text: 'Cancel',
//         role: 'cancel',
//         handler: data => {
//           console.log('You Clicked on Cancel');
//         }
//       },
//       {
//           text: 'Save',
//           handler: data => {
//           console.log('Saved clicked');
//         }
//       }
//     ]
//   });
//   alert.present();
// }

}




@Component({
  template: `
 <ion-header-bar class="bar bar-header bar-positive">
          <h1 class="title">New Contact</h1>
          <button class="button button-clear button-primary" ng-click="modal.hide()">Cancel</button>
        </ion-header-bar>
        <ion-content has-header="true" padding="true">
          <div>
            <p>
              I want some paddin'
            </p>
            <div class="list">
              <label class="item item-input">
                <span class="input-label">First Name</span>
                <input ng-model="newUser.firstName" type="text">
              </label>
              <label class="item item-input">
                <span class="input-label">Last Name</span>
                <input ng-model="newUser.lastName" type="text">
              </label>
              <label class="item item-input">
                <span class="input-label">Email</span>
                <input ng-model="newUser.email" type="text">
              </label>
              <button class="button button-full button-positive" ng-click="createContact()">Create</button>
            </div>
          </div>
        </ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
