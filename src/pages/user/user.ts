import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    console.log("%s", navParams.get("user").name);
    this.user = navParams.get("user");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  close(){
    this.view.dismiss();
  }

}
