import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'HomePage';

  constructor(
    platform: Platform,
    splashScreen: SplashScreen,
    statusBar: StatusBar
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
