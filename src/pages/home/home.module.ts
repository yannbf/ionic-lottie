import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LottieAnimationViewModule } from 'lottie-angular2';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        LottieAnimationViewModule.forRoot()
    ],
    exports: [
        HomePage
    ]
})

export class HomePageModule { };