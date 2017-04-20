import { Component, ViewChild,Injectable } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//screen Page
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { MovieListPage } from '../pages/movie-list/movie-list';
// import { FilterHotelPage   } from '../pages/filter-hotel/filter-hotel';

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
  userInfo: Array<{username: string, email: string}>;

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
      { title: 'My First List', component: ListPage },
      { title: 'Movie List', component: MovieListPage },
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

  menuOpened(){
    let info = this.auth.userInfo();
    let username = info.username;
    let email = info.email;
    this.userInfo= [{username : username, email: email}];

  }

  public logout() {
        this.auth.logout();
        return LoginPage;
    }
}
