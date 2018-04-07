import { Component } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { DetailProvider } from './../../providers/detail/detail';
import { DataProvider } from './../../providers/data/data';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  login_email: string;
  login_pass: string;

  pic_loc: string = "../../assets/imgs/user_profile_pics/profpic_default.png";
  attended: number = this.dataService.cur_user ? this.dataService.userGetAttended("workshop").length : 0;
  participated: number = this.dataService.cur_user ? this.dataService.userGetAttended("activity").length : 0;
  eaten: number = this.dataService.cur_user ? this.dataService.userGetAttended("meal").length : 0;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
              public loadingCtrl: LoadingController, public toastCtrl: ToastController, 
              public alertCtrl: AlertController, 
              public dataService: DataProvider, public detailService: DetailProvider) {
  }

  ionViewDidLoad() {
    console.log('loaded home profile page');
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
      let login_success = this.dataService.userLogIn(this.login_email, this.login_pass);
      let login_message = "Invalid email or password!";
      if(login_success){
        login_message = "Successfully logged in!";
        if(this.dataService.cur_user.avatar){
          console.log("setting profile picture to correct one");
          this.pic_loc = "../../assets/imgs/user_profile_pics/" + this.dataService.cur_user.avatar;
        }
      }

      let login_toast = this.toastCtrl.create({
        message: login_message,
        duration: 2500,
        position: "top",
        cssClass: "login_toast",
        showCloseButton: true,
        dismissOnPageChange: true

      })

      login_toast.present();

    });

    loading.present();

  }

  userEdit(){
    this.detailService.showUser({user:this.dataService.cur_user, display_type: 3});
  }

  userLogOut(){
    let logout_alert = this.alertCtrl.create({
      title: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancelled logout');
          }
        },
        {
          text: 'Log Out',
          handler: () => {
            console.log('logged out user');
            this.dataService.userLogOut();
            this.attended = 0;
            this.participated = 0;
            this.eaten = 0;
          }
        }
      ]
    });
    logout_alert.present();
  }

  showUserFavs(){
    console.log("showing user favs");
  }

}
