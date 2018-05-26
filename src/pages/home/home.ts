import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { FormPage } from '../form/form';

@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

	  public data:any={};
  	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  	}

  	goToForm(){
  		if (this.data.needs != undefined && this.data.needs != null && this.data.needs != "") {  			
  			  this.navCtrl.push(FormPage,{ "needs": this.data.needs});
  		}else{
    			let toast = this.toastCtrl.create({
    			    message: 'Please enter your needs!',
    			    duration: 1600,
    			    position: 'bottom'
    			});
    			toast.present();
  		}
  	}

}
