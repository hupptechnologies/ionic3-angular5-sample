import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { ThankYouPage } from '../thank-you/thank-you';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

	public data:any={};

  	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private global: GlobalProvider) {
  		this.data.needs = this.navParams.get('needs');
  	}

  	toastMsg(msg){
  		let toast = this.toastCtrl.create({
		    message: msg,
		    duration: 1600,
		    position: 'bottom'
		});
		toast.present();
  	}

  	submit(){
  		if (this.data.name == undefined || this.data.name == null || this.data.name == "") {
  			this.toastMsg("Please enter name!");
  			return;
  		}
  		if (this.data.email == undefined || this.data.email == null || this.data.email == "") {
  			this.toastMsg("Please enter email!");
  			return;
  		}
      var pattern =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
      if(!pattern.test(this.data.email)) {
        this.toastMsg("Please enter valid email!");
        return;
      }
  		if (this.data.phone == undefined || this.data.phone == null || this.data.phone == "") {
  			this.toastMsg("Please enter phone!");
  			return;
  		}
  		if (this.data.pickup_address == undefined || this.data.pickup_address == null || this.data.pickup_address == "") {
  			this.toastMsg("Please enter pick up address!");
  			return;
  		}
  		if (this.data.delivery_address == undefined || this.data.delivery_address == null || this.data.delivery_address == "") {
  			this.toastMsg("Please enter delivery address!");
  			return;
  		}
  		if (this.data.needs == undefined || this.data.needs == null || this.data.needs == "") {
  			this.toastMsg("Please enter your needs!");
  			return;
  		}
  		if (this.data.terms == undefined || this.data.terms == null || this.data.terms == "") {
  			this.toastMsg("Please accept terms & conditions!");
  			return;
  		}
  		this.global.submit(this.data).subscribe((res)=>{
  			console.log("res",res);
  			if (res.status == 1) {  				
  				this.navCtrl.setRoot(ThankYouPage);
  			}else{
  				this.toastMsg("Somethin went wrong, Please try later!");
  			}
  		},(err)=>{
  			console.log("err",err);
  			this.toastMsg("Somethin went wrong, Please try later!");
  		})  		
  	}

}
