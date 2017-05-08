import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FilacomodationService} from '../../providers/filacomodation-service';
import {AcomodationService} from '../../providers/acomodation-service';
/*
  Generated class for the FilterHotel2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-hotel2',
  templateUrl: 'filter-hotel2.html',
  providers:[FilacomodationService]
})
export class FilterHotel2Page {

  listRatings: Array<any>;
  listAreas: Array<any>;
  listLocations: Array<any>;
  listTypes: Array<any>;
  listFacilities: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams , public fil:FilacomodationService, public aco: AcomodationService) {}

  ionViewWillEnter() {
    this.listRatings = this.fil.listRatings;
    this.listAreas = this.fil.listAreas;
    this.listLocations = this.fil.listLocations;
    this.listTypes = this.fil.listTypes;
    this.listFacilities = this.fil.listFacilities;
  }

  filterRat(ratings){
    console.log(ratings);
    this.aco.setRatings(ratings);

  }

  filterAr(areas){
    console.log(areas);
    this.aco.setAreas(areas);
  }

  filterLoc(locations){
    console.log(locations);
    this.aco.setLocations(locations);
  }

  filterType(types){
    console.log(types);
    this.aco.setTypes(types);
  }

  filterFac(facilities){
    console.log(facilities);
    this.aco.setFacilities(facilities);
  }

}
