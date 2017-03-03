import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedAnimation: any = "lottie";
  animations: any;

  lottieAnimations = [
    {
      path: 'assets/animations/lottie/Watermelon.json'
    }, {
      path: 'assets/animations/lottie/MotionCorpse-Jrcanest.json'
    }, {
      path: 'assets/animations/lottie/TwitterHeart.json'
    }, {
      path: 'assets/animations/lottie/LottieLogo1.json'
    }, {
      path: 'assets/animations/lottie/MotionCorpse-Jrcanest.json'
    }, {
      path: 'assets/animations/lottie/LottieWalkthrough.json'
    }, {
      path: 'assets/animations/lottie/LottieLogo2.json'
    }, {
      path: 'assets/animations/lottie/9squares-AlBoardman.json'
    }
  ];

  bodymovinAnimations = [
    {
      path: 'assets/animations/bodymovin/bodymovin.json'
    }, {
      path: 'assets/animations/bodymovin/gatin.json'
    }, {
      path: 'assets/animations/bodymovin/adrock.json'
    }, {
      path: 'assets/animations/bodymovin/happy2016.json'
    }, {
      path: 'assets/animations/bodymovin/navidad.json'
    }
  ]

  otherAnimations = [
    {
      path: 'assets/animations/other/jake.json'
    }, {
      path: 'assets/animations/other/tibetan-monk.json'
    }, {
      path: 'assets/animations/other/bobber.json'
    }, {
      path: 'assets/animations/other/weather-change.json'
    }
  ]

  constructor(public navCtrl: NavController) {
    this.changeAnimations();
  }

  changeAnimations() {
    switch (this.selectedAnimation) {
      case "lottie":
        this.animations = this.lottieAnimations;
        break;
      case "bodymovin":
        this.animations = this.bodymovinAnimations;
        break;
      case "other":
        this.animations = this.otherAnimations;
        break;
    }
  }
}
