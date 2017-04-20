import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//pages
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
//HomeScreen
import { HomePage } from '../pages/home/home';
import { CustomePackagePage } from '../pages/custome-package/custome-package';
import { FixedPackagePage } from '../pages/fixed-package/fixed-package';
import { PromoPackagePage } from '../pages/promo-package/promo-package';
//IteneraryBuilder
import { IteneraryBuilderPage } from '../pages/itenerary-builder/itenerary-builder';
import { DestinationPage  } from '../pages/destination/destination';
import { ListHotelPage  } from '../pages/list-hotel/list-hotel';
import { ListAttractionPage  } from '../pages/list-attraction/list-attraction';
import { ListTransportPage  } from '../pages/list-transport/list-transport';
import { FilterTransportPage   } from '../pages/filter-transport/filter-transport';
import { FilterHotelPage   } from '../pages/filter-hotel/filter-hotel';
import {InputTravellersPage} from '../pages/input-travellers/input-travellers';

//component
import { LocationPopoverComponent} from '../components/location-popover/location-popover';


import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MovieListPage } from '../pages/movie-list/movie-list';


//service
import { AuthService } from '../providers/auth-token-service';
// import { MovieService } from '../providers/movie-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    //Home Screen
    HomePage,
    CustomePackagePage,
    PromoPackagePage,
    FixedPackagePage,
    //itinerarybuilder
    IteneraryBuilderPage,
    DestinationPage,
    ListHotelPage,
    ListTransportPage,
    ListAttractionPage,
    FilterTransportPage,
    FilterHotelPage,
    InputTravellersPage,
    //component
    LocationPopoverComponent,
    

    ItemDetailsPage,
    ListPage,
    MovieListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages:"true"})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    //Home Screen
    HomePage,
    CustomePackagePage,
    PromoPackagePage,
    FixedPackagePage,
    //itineraryBuilder
    IteneraryBuilderPage,
    DestinationPage,
    ListHotelPage,
    ListTransportPage,
    ListAttractionPage,
    FilterHotelPage,
    FilterTransportPage,
    InputTravellersPage,
    //component
    LocationPopoverComponent,
    
    ItemDetailsPage,
    ListPage,  
    MovieListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthService
  ]
})
export class AppModule {}
