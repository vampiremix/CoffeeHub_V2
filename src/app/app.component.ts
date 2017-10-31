
import { TabsPage } from '../pages/tabs/tabs';
import { AuthenticationProvider } from '../providers/authentication/authentication';

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth: AuthenticationProvider) {
    { let user = JSON.parse(window.localStorage.getItem('user'));
      if (this.auth.isLogged() === true && user) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LoginPage;
      }
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();


      });
    }
  }
}
