import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
