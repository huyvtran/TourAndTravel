import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform,ViewController } from 'ionic-angular';

import {IteneraryService} from '../../providers/itenerary-service';
import {DestinationPage} from '../destination/destination';
import {ListHotelPage} from '../list-hotel/list-hotel';
import {FilterTransportPage} from '../filter-transport/filter-transport';
import {ListAttractionPage} from '../list-attraction/list-attraction';
import {InputTravellersPage} from '../input-travellers/input-travellers';
import {ConfirmBookingPage} from '../confirm-booking/confirm-booking';

@Component({
  selector: 'page-itenerary-builder',
  templateUrl: 'itenerary-builder.html',
  providers: [IteneraryService]
})
export class IteneraryBuilderPage {
toursname: string;
destination:string;
attraction: string;
tranportation : string;
acomodation : string;

public event = {
    monthStart: new Date().toISOString(),
    monthEnd: new Date().toISOString()
}

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  public modalCtrl: ModalController,  
  private ite: IteneraryService) {          
    this.toursname= ''
    this.destination = this.ite.getDestination();
    this.attraction = '';
    this.tranportation = '';
    this.acomodation = '';
  }

  ionViewWillEnter() {
    var att = this.ite.getAttraction();
    var tourName = this.ite.getToursName();
    var transportName = this.ite.getTransport();
    if(att != null){
      this.attraction=att.attrac.Name;
    }

    if (tourName !=null){
      this.toursname=tourName;
    }
     if(transportName != null){
      this.tranportation=transportName.trans.Name;
    }

  }


  inputToursName(event){
    var data = event.target.value;
    this.ite.setToursName(data);
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

    createItenerary(event) {
    this.navCtrl.push(ConfirmBookingPage);
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
