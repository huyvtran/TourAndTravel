import { Component, ViewChild,Injectable } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//screen Page
import { HomePage } from '../pages/home/home';
import { MybookingPage } from '../pages/mybooking/mybooking';
// import { ListPage } from '../pages/list/list';
 import { LoginPage } from '../pages/login/login';
// import { MovieListPage } from '../pages/movie-list/movie-list';

//import { HotelRoomallocatePage   } from '../pages/hotel-roomallocate/hotel-roomallocate';

import { AuthService } from '../providers/auth-token-service';


@Component({
  selector: 'page-app',
  templateUrl: 'app.html'
})

@Injectable()
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  user;
  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage;
  
  pages: Array<{title: string, component: any}>;
  username;
  email;
  //userInfo: Array<{username: string, email: string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthService
    ) {
      
    this.initializeApp();
    //this.userInfo = this.user;
    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Booking', component: MybookingPage },
      { title: 'Logout', component: this.logout() }  
    ];
  }

  initializeApp() {
      this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  public menuOpened(){
    let info = this.auth.userInfo();
    this.username = info.username;
    this.email = info.email;
  }

  setUser(user){
    this.username = user;
  }

  ionViewWillEnter(){
    let info = this.auth.userInfo();
    this.username = info.username;
    this.email = info.email;
  }

  public logout() {
        this.auth.logout();
        this.username=null;
        this.email=null;
        return LoginPage;
    }
}
