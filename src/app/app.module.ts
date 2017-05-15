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
//My Bookings
import { MybookingPage} from '../pages/mybooking/mybooking';
import { MybookingOnPage} from '../pages/mybooking-on/mybooking-on';
import { MybookingComPage} from '../pages/mybooking-com/mybooking-com';
//IteneraryBuilder
import { IteneraryBuilderPage } from '../pages/itenerary-builder/itenerary-builder';
import { DestinationPage  } from '../pages/destination/destination';
import { DestinationPage1  } from '../pages/destination1/destination1';
//hotel
import { ListHotelPage  } from '../pages/list-hotel/list-hotel';
import { FilterHotelPage   } from '../pages/filter-hotel/filter-hotel';
import { HotelRoomtypePage  } from '../pages/hotel-roomtype/hotel-roomtype';
import { HotelRoomallocatePage   } from '../pages/hotel-roomallocate/hotel-roomallocate';
import { HotelRoomservicePage   } from '../pages/hotel-roomservice/hotel-roomservice';
//transport
import { ListTransportPage } from '../pages/list-transport/list-transport';
import { FilterTransportPage } from '../pages/filter-transport/filter-transport';
import { TransportAirportservicePage } from '../pages/transport-airportservice/transport-airportservice';

import { ListAttractionPage  } from '../pages/list-attraction/list-attraction';
import {InputTravellersPage} from '../pages/input-travellers/input-travellers';

//TestFilterManual
import { FilterTransport2Page } from '../pages/filter-transport2/filter-transport2';
import { FilterHotel2Page   } from '../pages/filter-hotel2/filter-hotel2';

//result
import {ConfirmBookingPage} from '../pages/confirm-booking/confirm-booking';
import {TourDetailsPage} from '../pages/tour-details/tour-details';
//component
import { LocationPopoverComponent} from '../components/location-popover/location-popover';
//Coba-coba
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MovieListPage } from '../pages/movie-list/movie-list';


//service
import { AcomodationService } from '../providers/acomodation-service';
import { AttractionService } from '../providers/attraction-service';
import { AuthService } from '../providers/auth-token-service';
import { IteneraryService } from '../providers/itenerary-service';
import { FilacomodationService } from '../providers/filacomodation-service';
import { FiltransportService } from '../providers/filtransport-service';
import { LocationService } from '../providers/location-service';
import { TransportService } from '../providers/transport-service';
import { TransactionService  } from '../providers/transaction-service';
import {  HistoryService } from '../providers/history-service';

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
    //My Bookings
    MybookingPage,
    MybookingComPage,
    MybookingOnPage,

    //itinerarybuilder
    IteneraryBuilderPage,
    DestinationPage,
    DestinationPage1,
    ListHotelPage,
    HotelRoomallocatePage,
    HotelRoomtypePage,
    FilterHotelPage,
    HotelRoomservicePage,

    ListTransportPage,
    TransportAirportservicePage,
    ListAttractionPage,
    FilterTransportPage,
    
    InputTravellersPage,

    //filterManual
    FilterHotel2Page,
    FilterTransport2Page,

    //result
    ConfirmBookingPage,
    TourDetailsPage,
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
    //My Booking
    MybookingPage,
    MybookingComPage,
    MybookingOnPage,
    
    //itineraryBuilder
    IteneraryBuilderPage,
    DestinationPage,
    DestinationPage1,
    ListHotelPage,
    HotelRoomallocatePage,
    HotelRoomtypePage,
    HotelRoomservicePage,

    ListTransportPage,
    TransportAirportservicePage,
    ListAttractionPage,
    FilterHotelPage,
    FilterTransportPage,
    InputTravellersPage,


    //filterManual
    FilterHotel2Page,
    FilterTransport2Page,

    //result
    ConfirmBookingPage,
    TourDetailsPage,

    //component
    LocationPopoverComponent,
    
    ItemDetailsPage,
    ListPage,  
    MovieListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    IteneraryService,
    AcomodationService,
    AttractionService,
    TransportService,
    FilacomodationService,
    FiltransportService,
    LocationService,
    TransactionService,
    HistoryService
  ]
})
export class AppModule {}
