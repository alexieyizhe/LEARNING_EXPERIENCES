import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { ModalController, NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cur_user;
  login_email: string;
  login_pass: string;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.cur_user = this.dataService.getCurUser();

  }

  userLogIn(){
    console.log(`attempting to log in with
    email: %s
    pass: %s`, this.login_email, this.login_pass);

    let loading = this.loadingCtrl.create(
      {
        spinner: 'bubbles',
        duration: 100
      }
    );
    
    loading.onDidDismiss(() => {
      console.log("loading dismissed!")
      let login_success = this.dataService.logIn(this.login_email, this.login_pass);
      if(login_success){
        this.cur_user = this.dataService.getCurUser();
        document.getElementById("login_error").style.display = "none";
      } else {
        document.getElementById("login_error").style.display = "inline";
      }
    });

    loading.present();

    
  }

}
