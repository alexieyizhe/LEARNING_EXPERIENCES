import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cur_user;
  login_email: string;
  login_pass: string;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public dataService: DataProvider) {
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
      let login_message = "Invalid email or password!";
      if(login_success){
        login_message = "Successfully logged in!";
        this.cur_user = this.dataService.getCurUser();
        document.getElementById("login_error").style.display = "none";
      }

      let login_toast = this.toastCtrl.create({
        message: login_message,
        duration: 5000,
        position: "top",
        cssClass: "login_toast",
        dismissOnPageChange: true,

      })

      login_toast.present();

    });

    loading.present();

  }

}
