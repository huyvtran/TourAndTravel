import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import {IteneraryBuilderPage} from '../itenerary-builder/itenerary-builder'
import { AuthService } from '../../providers/auth-token-service';
import { LocationPopoverComponent } from '../../components/location-popover/location-popover';

@Component({
  selector: 'page-custome-package',
  templateUrl: 'custome-package.html'
})
export class CustomePackagePage {
  selectedLocation: string;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,  
      private auth: AuthService, 
      public popoverCtrl: PopoverController) {
          this.selectedLocation = "Selected Destination";
      }

  itineraryCusTapped(event) {
    this.navCtrl.push(IteneraryBuilderPage);
  }

  locationPopover(ev){
      let popover = this.popoverCtrl.create(LocationPopoverComponent, {
    });
    popover.present({
      ev: ev
    });

     popover.onDidDismiss((popoverData) => {
      this.selectedLocation = popoverData;
    })

  }

//     getinfo() {
//       var test = this.auth.getUserInfo();
//       console.log(test);
//         this.auth.getUserInfo().then(data => {
//         if(data) {
//           console.log(data);
//             var alert = this.alertCtrl.create({
//                 title: data["Username"],
//                 subTitle: data["HasRegistered"],
//                 buttons: ['ok']
//             });
//             alert.present();
//         }

//     })
//  }


//   getUser(){
//     let info = this.auth.userInfo();
//     let username = info.username;
//     let email = info.email;
//     var alert = this.alertCtrl.create({
//                   title: username,
//                   subTitle: email,
//                   buttons: ['ok']
//               });
//               alert.present();
//   }

  

}
