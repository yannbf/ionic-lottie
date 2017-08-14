import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
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

  interactive = false;
  anim: any;

  handleAnimation(anim) {
    this.anim = anim;
  }

  animationOption = {
    loop: true,
    prerender: false,
    autoplay: false,
    autoloadSegments: false,
    path: 'assets/animations/other/jake.json'
  }

  animate() {
    this.anim.playSegments([[27, 142], [14, 26]], true);
  }

  changeAnimations() {
    this.interactive = false;
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
      case "interactive":
        this.interactive = true;
        break;
    }
  }
}
