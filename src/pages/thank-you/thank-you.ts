import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-thank-you',
  templateUrl: 'thank-you.html',
})
export class ThankYouPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	goToHome(){
  		this.navCtrl.setRoot(HomePage,{}, {animate: true, direction: 'forward'});
  	}

}
